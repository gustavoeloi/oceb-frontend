import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isNavActive: boolean = false;

  toggleNav() {
    this.isNavActive = !this.isNavActive;
  }
}
