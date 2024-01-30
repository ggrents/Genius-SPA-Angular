import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  input: string | undefined;
  constructor() {
    this.input = 'Search for lyrics & more';
  }
}
