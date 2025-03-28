import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // toggleMenu() {
  //   const menu = document.querySelector('.nav-content-2');
  //   menu?.classList.toggle('active');
  // }
  
  isMenuOpen: boolean = false; // Initialize menu state

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Toggle menu state
  }
}
