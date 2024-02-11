import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavMenuComponent],
  exports: [HeaderComponent, FooterComponent, NavMenuComponent],
  imports: [CommonModule, RouterModule, InputTextModule, FormsModule],
})
export class LayoutModule {}
