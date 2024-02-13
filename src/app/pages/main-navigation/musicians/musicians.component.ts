import { Component, OnInit } from '@angular/core';
import { MusiciansService } from './musicians.service';
import { Observable, filter, map } from 'rxjs';
import { Musician } from './models/musician';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-musicians',
  templateUrl: './musicians.component.html',
  styleUrl: './musicians.component.scss',
})
export class MusiciansComponent implements OnInit {
  startLetter: string | null = null;

  musicians$: Observable<Musician[]>;
  constructor(
    private _service: MusiciansService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.startLetter = params['startLetter'];
      if (!this.startLetter) {
        this.musicians$ = this._service.getAllMusicians();
      } else {
        this.musicians$ = this._service.getAllMusicians().pipe(
          map((musicians) => {
            return musicians.filter((musician) =>
              musician.nickname.startsWith(this.startLetter.toUpperCase())
            );
          })
        );
      }
    });
  }
}
