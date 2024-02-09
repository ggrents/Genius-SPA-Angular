import { NgModule } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { ChartsComponent } from './charts/charts.component';
import { MainComponent } from './main/main.component';
import { VideosComponent } from './videos/videos.component';
import { NewsCardComponent } from './main/news-card/news-card.component';
import { DatePipe } from './main/news-card/utils/date.pipe';
import { MutedDirective } from './main/news-card/utils/muted.directive';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [
    MainComponent,
    ChartsComponent,
    VideosComponent,
    NewsCardComponent,
    MutedDirective,
  ],
  imports: [
    CommonModule,
    DatePipe,
    FormsModule,
    DropdownModule,
    TableModule,
    ButtonModule,
  ],
})
export class MainNavigationModule {}
