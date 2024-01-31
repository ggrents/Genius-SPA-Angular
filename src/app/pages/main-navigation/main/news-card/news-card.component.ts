import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.scss',
})
export class NewsCardComponent {
  @Input() data: any;
}
