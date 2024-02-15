import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Track } from '../models/track';
import { TrackService } from '../service/track.service';

@Component({
  selector: 'app-track-detail',
  templateUrl: './track-detail.component.html',
  styleUrl: './track-detail.component.scss',
})
export class TrackDetailComponent {
  track_id: number;
  track$: Observable<Track>;
  constructor(private route: ActivatedRoute, private _service: TrackService) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.track_id = params['id'];
      this.track$ = this._service.getTrackById(this.track_id);
    });
  }
}
