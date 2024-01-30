import { Component } from '@angular/core';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  firstList: string[] = [
    'About Genius',
    'Contributor Guidelines',
    'Press',
    'Shop',
    'Advertise',
    'Privacy Policy',
  ];
  secondList: string[] = [
    'Licensing',
    'Jobs',
    'Developers',
    'Copyright Policy',
    'Contact Us',
    'Sign In',
  ];

  icons: any = [
    { name: 'Twitter', icon: 'fa-twitter' },
    { name: 'Facebook', icon: 'fa-facebook' },
    { name: 'Instagram', icon: 'fa-instagram' },
    { name: 'Youtube', icon: 'fa-youtube' },
  ];
}
