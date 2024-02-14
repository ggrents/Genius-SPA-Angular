import { Component, OnInit } from '@angular/core';
import { Genre } from './models/genre';
import { TrackService } from './service/track.service';
import { Observable } from 'rxjs';
import { Track } from './models/track';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss',
})
export class ChartsComponent implements OnInit {
  loadMoreDisabled: boolean = false;
  genres$: Observable<Genre[]>;
  tracks$: Observable<Track[]>;
  tracks: Track[] = [];
  tracksDisplayed: Track[] = [];
  selectedGenre: Genre;

  constructor(private _service: TrackService) {}
  ngOnInit(): void {
    this.genres$ = this._service.getGenres();

    this.tracks$ = this._service.getTracks();
    this.tracks$.subscribe((tracks) => {
      this.tracks = tracks;
      this.tracksDisplayed = this.tracks.slice(0, 10);
    });
  }

  filterTracksByGenre(genre_id: number) {
    console.log(genre_id);
    if (!genre_id) {
      this.tracksDisplayed = this.tracks.slice(0, 10);
      return;
    }
    this.tracksDisplayed = this.tracks.filter(
      (track) => track.genreId == genre_id
    );

    console.log(this.tracksDisplayed);
  }

  loadMore() {
    const startIndex = this.tracksDisplayed.length;
    const endIndex = startIndex + 10;

    const filteredTracks = this.selectedGenre
      ? this.tracks.filter((track) => track.genreId == this.selectedGenre.id)
      : this.tracks;

    if (endIndex < filteredTracks.length) {
      this.tracksDisplayed.push(...filteredTracks.slice(startIndex, endIndex));
      this.loadMoreDisabled = false;
    } else {
      this.loadMoreDisabled = true;
    }
  }
}
