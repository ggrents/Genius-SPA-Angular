import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main-navigation/main/main.component';
import { ChartsComponent } from './pages/main-navigation/charts/charts.component';
import { MusiciansComponent } from './pages/main-navigation/musicians/musicians.component';
import { SearchComponent } from './pages/main-navigation/search/search.component';
import { ArticleDetailComponent } from './pages/main-navigation/main/article-detail/article-detail.component';
import MusicianDetailComponent from './pages/main-navigation/musicians/musician-detail/musician-detail.component';
import { TrackDetailComponent } from './pages/main-navigation/charts/track-detail/track-detail.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'videos', component: ChartsComponent },
  { path: 'musicians', component: MusiciansComponent },
  { path: 'musician/:id', component: MusicianDetailComponent },
  { path: 'track/:id', component: TrackDetailComponent },
  { path: 'search', component: SearchComponent },
  { path: 'article/:id', component: ArticleDetailComponent },

  {
    path: 'users',
    loadChildren: () =>
      import('./pages/user-management/user.module').then(
        (m) => m.UserManagementModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
