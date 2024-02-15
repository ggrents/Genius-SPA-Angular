import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-musician-detail',
  templateUrl: './musician-detail.component.html',
  styleUrl: './musician-detail.component.scss',
})
export default class MusicianDetailComponent {
  musician_id: number;

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.musician_id = params['id'];
    });
  }
}
