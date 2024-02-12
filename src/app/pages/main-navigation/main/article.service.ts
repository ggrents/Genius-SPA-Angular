import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/enviroment';
import { Article } from './news-card/models/article';

@Injectable()
export class ArticleService {
  apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  getHottestArticle() {
    return this.http.get<Article>(`${this.apiUrl}/news?_start=0&_limit=1`);
  }

  getLatestNews() {
    return this.http.get<Article[]>(`${this.apiUrl}/news?_start=1&_limit=4`);
  }
}
