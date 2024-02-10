import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main-navigation/main/main.component';
import { ChartsComponent } from './pages/main-navigation/charts/charts.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'videos', component: ChartsComponent },
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
