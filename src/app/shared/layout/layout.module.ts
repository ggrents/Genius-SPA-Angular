import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../../features/search/search.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavMenuComponent,
    SearchComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavMenuComponent,
    SearchComponent,
  ],
  imports: [CommonModule],
})
export class LayoutModule {}
