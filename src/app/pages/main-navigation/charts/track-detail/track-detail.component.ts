import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-track-detail',
  templateUrl: './track-detail.component.html',
  styleUrl: './track-detail.component.scss',
})
export class TrackDetailComponent {
  track_id: number;

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.track_id = params['id'];
    });
  }
}
