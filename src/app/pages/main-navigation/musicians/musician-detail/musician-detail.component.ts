import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Musician } from '../models/musician';
import { MusiciansService } from '../musicians.service';
import { Track } from '../../charts/models/track';
import { TrackService } from '../../charts/service/track.service';

@Component({
  selector: 'app-musician-detail',
  templateUrl: './musician-detail.component.html',
  styleUrl: './musician-detail.component.scss',
})
export default class MusicianDetailComponent {
  musician_id: number;
  musician$: Observable<Musician>;
  tracks: Track[];

  constructor(
    private route: ActivatedRoute,
    private _service: MusiciansService,
    private _trackService: TrackService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.musician_id = params['id'];
      this.musician$ = this._service.getMusicianById(this.musician_id);
      this._trackService
        .getTracksByMusicianId(this.musician_id)
        .subscribe((tracks) => {
          this.tracks = tracks;
        });
    });
  }
}
