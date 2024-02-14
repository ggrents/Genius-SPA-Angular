import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  placeholder: string | undefined;
  searchedArtist: string | undefined;
  constructor(private router: Router) {
    this.placeholder = 'Search for lyrics & more';
  }

  navigateToSearchPage() {
    this.router.navigate(['/search'], {
      queryParams: { query: this.searchedArtist },
    });
  }
}
