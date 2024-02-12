import { Component, OnInit } from '@angular/core';
import { ArticleService } from './article.service';
import { Observable } from 'rxjs';
import { Article } from './news-card/models/article';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  constructor(private _service: ArticleService) {}
  latest_news$: Observable<Article[]>;
  hottest_article$: Observable<Article>;

  ngOnInit(): void {
    this.hottest_article$ = this._service.getHottestArticle();
    this.hottest_article$.subscribe(console.log);
    this.latest_news$ = this._service.getLatestNews();
  }
}
