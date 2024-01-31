import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts/charts.component';
import { MainComponent } from './main/main.component';
import { VideosComponent } from './videos/videos.component';
import { NewsCardComponent } from './main/news-card/news-card.component';

@NgModule({
  declarations: [
    MainComponent,
    ChartsComponent,
    VideosComponent,
    NewsCardComponent,
  ],
  imports: [CommonModule],
})
export class MainNavigationModule {}
