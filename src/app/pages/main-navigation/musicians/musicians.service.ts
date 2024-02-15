import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/enviroment';
import { Musician } from './models/musician';
import { Observable, map, take } from 'rxjs';

@Injectable()
export class MusiciansService {
  apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  getAllMusicians() {
    return this.http.get<Musician[]>(`${this.apiUrl}/musicians`);
  }

  GetMusiciansByLetter(startLetter: string) {
    return this.http.get<Musician[]>(
      `${this.apiUrl}/musicians?nickname_like=${startLetter}`
    );
  }

  getMusicianById(id: number) {
    return this.http.get<Musician>(`${this.apiUrl}/musicians/${id}`);
  }

  GetMusiciansByQuery(searchedQuery: string): Observable<Musician[]> {
    return this.http.get<Musician[]>(`${this.apiUrl}/musicians`).pipe(
      map((musicians) => {
        return musicians.filter((musician) =>
          musician.nickname
            .toLowerCase()
            .includes(searchedQuery.toLowerCase().slice(0, 50))
        );
      })
    );
  }
}
