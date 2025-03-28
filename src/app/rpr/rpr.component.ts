import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rpr',
  templateUrl: './rpr.component.html',
  styleUrls: ['./rpr.component.css']
})
export class RPRComponent {

    constructor(private viewportScroller: ViewportScroller, private router: Router) {}
  
    ngOnInit(): void {
      window.scrollTo(0, 0);
    }
    
  scrollTo(section: string): void {
    this.viewportScroller.scrollToAnchor(section);
  }

  toggleMenu() {
    const body = document.body;
    const navContent = document.querySelector('.nav-content-2');

    if (navContent) {
      navContent.classList.toggle('active');
    }

    if (body.classList.contains('menu-open')) {
      body.classList.remove('menu-open');
    } else {
      body.classList.add('menu-open');
    }
  }
  
  sponsorships = [
    { name: 'Diamond', price: 'Rs. 30 Lacs', description: 'Top-tier global sponsorship with premier branding across all materials, 1exclusive inaugural and 2 panel speaker slots, social media and PRinclusion, dedicated booth space at venue, and accommodation for theevent for up to 10 delegates.', theme: 'light' },
    { name: 'Intermediate', price: 'Rs. 25 Lacs', description: 'Premier branding across all materials, 1 exclusive inaugural and 1 panelspeaker slots, social media and PR inclusion, booth space, andaccommodation for up to 10 delegates.', theme: 'dark' },
    { name: 'Gold', price: 'Rs. 15 Lacs', description: '1 Panel speaker slot , accommodation for 5 delegates, social mediainclusion, co-authoring opportunities, and premier branding across allmaterials.', theme: 'light' },
    { name: 'Silver', price: 'Rs. 10 Lacs', description: '1 Curated session speaker slot , exclusive branding for a selected session,accommodation for 3 delegates, premier event branding, and socialmedia inclusion.', theme: 'dark' }
  ];

  gotoAwards(){
    this.router.navigate(['/power-awards']);
  }

  contact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }  

  register(){
    this.router.navigate(['/register']);
  }
}
