import { Component, Input } from '@angular/core';
import { DatePipe } from './utils/date.pipe';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.scss',
})
export class NewsCardComponent {
  condition: boolean = true;
  @Input() article: any;
}
