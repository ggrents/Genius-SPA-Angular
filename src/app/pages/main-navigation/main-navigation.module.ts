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
import { MusiciansComponent } from './musicians/musicians.component';
import { MusiciansLettersComponent } from '../../features/musicians-letters/musicians.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticleService } from './main/article.service';
import { MusiciansService } from './musicians/musicians.service';
import { RouterModule } from '@angular/router';
import { TrackService } from './charts/service/track.service';
import { MusicianDetailComponent } from './musicians/musician-detail/musician-detail.component';
import { ArticleDetailComponent } from './main/article-detail/article-detail.component';
import { TrackDetailComponent } from './charts/track-detail/track-detail.component';

@NgModule({
  declarations: [
    MainComponent,
    ChartsComponent,
    VideosComponent,
    NewsCardComponent,
    MutedDirective,
    MusiciansComponent,
    MusiciansLettersComponent,
    SearchComponent,
    MusicianDetailComponent,
    ArticleDetailComponent,
    TrackDetailComponent,
  ],
  imports: [
    CommonModule,
    DatePipe,
    FormsModule,
    DropdownModule,
    TableModule,
    ButtonModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [ArticleService, MusiciansService, TrackService],
})
export class MainNavigationModule {}
