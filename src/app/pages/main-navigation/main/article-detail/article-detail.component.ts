import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../news-card/models/article';
import { Observable } from 'rxjs';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.scss',
})
export class ArticleDetailComponent {
  article_id: number;
  article$: Observable<Article>;
  constructor(
    private route: ActivatedRoute,
    private _service: ArticleService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.article_id = params['id'];
      this.article$ = this._service.getArticleById(this.article_id);
    });
  }
}
