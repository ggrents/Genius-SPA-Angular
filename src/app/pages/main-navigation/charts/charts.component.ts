import { Component, OnInit } from '@angular/core';
import { Genre } from './models/genre';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss',
})
export class ChartsComponent implements OnInit {
  genres: Genre[];
  tracks: any[];
  selectedGenre: Genre;

  ngOnInit(): void {
    this.genres = [
      {
        id: 1,
        name: 'Rap',
      },
      {
        id: 2,
        name: 'Pop',
      },
      {
        id: 3,
        name: 'Rock',
      },
      {
        id: 4,
        name: 'R&B',
      },
    ];

    this.tracks = [
      {
        id: 1,
        title: 'Fast Car',
        artist: 'Tracy Chapman',
        plays: '1.6M',
      },
      {
        id: 2,
        title: 'HISS',
        artist: 'Megan Thee Stallion',
        plays: '1.5M',
      },
      {
        id: 3,
        title: 'Lose Yourself',
        artist: 'Eminem',
        plays: '10.2M',
      },
      {
        id: 4,
        title: 'Think U The Shit (Fart)',
        artist: 'Ice Spice',
        plays: '615.3K',
      },
      {
        id: 5,
        title: 'Big Foot',
        artist: 'Nicki Minaj',
        plays: '977K',
      },
      {
        id: 6,
        title: 'Mockingbird',
        artist: 'Eminem',
        plays: '4.7M',
      },
      {
        id: 7,
        title: 'IU - Love wins all (Romanized)',
        artist: 'Genius Romanizations',
        plays: '144.6K',
      },
      {
        id: 8,
        title: 'The Real Slim Shady',
        artist: 'Eminem',
        plays: '5.9M',
      },
    ];
  }
}
