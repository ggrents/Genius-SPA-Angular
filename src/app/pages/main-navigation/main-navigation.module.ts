import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts/charts.component';
import { MainComponent } from './main/main.component';
import { VideosComponent } from './videos/videos.component';

@NgModule({
  declarations: [MainComponent, ChartsComponent, VideosComponent],
  imports: [CommonModule],
})
export class MainNavigationModule {}
