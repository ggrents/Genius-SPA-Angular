import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  newsItems = [
    { title: 'Новость 1', content: 'Содержание новости 1' },
    { title: 'Новость 2', content: 'Содержание новости 2' },
    { title: 'Новость 3', content: 'Содержание новости 3' },
    { title: 'Новость 4', content: 'Содержание новости 4' },
  ];
}
