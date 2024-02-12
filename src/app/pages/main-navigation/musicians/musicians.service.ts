import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/enviroment';
import { Musician } from './models/musician';

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
}