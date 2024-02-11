import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main-navigation/main/main.component';
import { ChartsComponent } from './pages/main-navigation/charts/charts.component';
import { MusiciansComponent } from './pages/main-navigation/musicians/musicians.component';
import { SearchComponent } from './pages/main-navigation/search/search.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'videos', component: ChartsComponent },
  { path: 'musicians', component: MusiciansComponent },
  { path: 'search', component: SearchComponent },
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
