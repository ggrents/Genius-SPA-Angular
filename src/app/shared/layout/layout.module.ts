import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../../features/search/search.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

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
  imports: [CommonModule, RouterModule, InputTextModule, FormsModule],
})
export class LayoutModule {}
