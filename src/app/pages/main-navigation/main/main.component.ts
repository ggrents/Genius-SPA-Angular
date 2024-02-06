import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  latest_news: any[] = [
    {
      title: "Eminem's 27-year-old daughter is getting married",
      content:
        'The daughter of a famous rapper has become quite an adult — on Monday she announced her engagement to her boyfriend! The heiress of the star carefully hides her personal life, but still could not help but share her emotions.',
      image_path: 'eminem.jpg',
      date_created: new Date(),
    },
    {
      title:
        'Travis Scott slams props at Grammy Awards after losing Best Rap Album',
      content: 'Содержание новости 1',
      image_path: 'cactus-jack.jpg',
      date_created: new Date(),
    },
    {
      title:
        'Playboy rapper Carti has been arrested for assaulting his pregnant girlfriend',
      content: 'Содержание новости 1',
      image_path: 'Playboi-Carti.jpg',
      date_created: new Date(),
    },
    {
      title: "21 savage released the album 'American Dream'",
      content: 'Содержание новости 1',
      image_path: '212121.jpg',
      date_created: new Date(),
    },
  ];
}
