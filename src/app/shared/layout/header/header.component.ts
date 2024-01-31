import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  placeholder: string | undefined;
  constructor() {
    this.placeholder = 'Search for lyrics & more';
  }
}
