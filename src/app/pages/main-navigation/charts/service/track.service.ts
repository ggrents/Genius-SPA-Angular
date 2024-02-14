import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Track } from '../models/track';
import { Genre } from '../models/genre';
import { environment } from '../../../../../environments/enviroment';

@Injectable()
export class TrackService {
  apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  getTracks(): Observable<Track[]> {
    return this.http.get<Track[]>(`${this.apiUrl}/tracks?_sort=views`);
  }

  getTrackById(id: number): Observable<Track> {
    return this.http.get<Track>(`${this.apiUrl}/${id}`);
  }

  GetTracksByLetter(startLetter: string) {
    return this.http.get<Track[]>(
      `${this.apiUrl}/tracks?title_like=${startLetter}`
    );
  }

  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(`${this.apiUrl}/genres`);
  }
}
