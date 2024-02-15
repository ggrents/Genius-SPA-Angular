import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusiciansService } from '../musicians/musicians.service';
import { TrackService } from '../charts/service/track.service';
import { Observable, map } from 'rxjs';
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
  musiciansLeftHalf$: Observable<Musician[]>;
  musiciansRightHalf$: Observable<Musician[]>;
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
    this.musicians$ = this._musicianService.GetMusiciansByQuery(
      this.searchedQuery
    );
    this.musiciansLeftHalf$ = this.musicians$.pipe(
      map((musicians) => musicians.slice(0, musicians.length / 2))
    );
    this.musiciansRightHalf$ = this.musicians$.pipe(
      map((musicians) => musicians.slice(musicians.length / 2))
    );

    const newLocal = this;
    newLocal.tracks$ = this._trackService.GetTracksByQuery(this.searchedQuery);
  }
}
