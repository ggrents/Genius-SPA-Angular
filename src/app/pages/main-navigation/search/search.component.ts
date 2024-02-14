import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusiciansService } from '../musicians/musicians.service';
import { TrackService } from '../charts/service/track.service';
import { Observable } from 'rxjs';
import { Musician } from '../musicians/models/musician';
import { Track } from '../charts/models/track';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
  searchedQuery: string;
  musicians$: Observable<Musician[]>;
  tracks$: Observable<Track[]>;
  constructor(
    private route: ActivatedRoute,
    private _musicianService: MusiciansService,
    private _trackService: TrackService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.searchedQuery = params['query'];
      this.fetchData();
    });
  }

  fetchData() {
    // Получение музыкантов
    this.musicians$ = this._musicianService.GetMusiciansByLetter(
      this.searchedQuery
    );
    // Получение треков
    this.tracks$ = this._trackService.GetTracksByLetter(this.searchedQuery);
  }
}
