import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss',
})
export class NavMenuComponent {
  //pages: string[] = ['MUSICIANS', 'FEATURED', 'CHARTS', 'VIDEOS'];
  pages: any[] = [
    {
      name: 'MUSICIANS',
      link: '/musicians',
    },
    {
      name: 'FEATURED',
      link: '/',
    },
    {
      name: 'CHARTS',
      link: '/charts',
    },
    {
      name: 'VIDEOS',
      link: '/',
    },
  ];
  socialNetworks = [
    { name: 'Twitter', icon: 'fa-twitter' },
    { name: 'Facebook', icon: 'fa-facebook' },
    { name: 'Instagram', icon: 'fa-instagram' },
    { name: 'Youtube', icon: 'fa-youtube' },
  ];
}
