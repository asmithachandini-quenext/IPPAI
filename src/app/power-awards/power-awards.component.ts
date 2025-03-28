import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-power-awards',
  templateUrl: './power-awards.component.html',
  styleUrls: ['./power-awards.component.css']
})
export class PowerAwardsComponent {

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
    
    leftMilestones = [
      { number: '01', text: 'Transforming the energy landscape through groundbreaking technologies.' },
      { number: '02', text: 'Setting benchmarks in energy efficiency and renewable integration.' }
    ];
  
    rightMilestones = [
      { number: '03', text: 'Leading efforts to achieve Net Zero goals.' },
      { number: '04', text: 'Ensuring energy security in the face of global challenges.' }
    ];

    items = [
      { title: 'Fill out the nomination form', content: 'Fill in the nomination form. The form has several categories. One can apply for as many categories as you like.', expanded: false },
      { title: 'Provide a detailed description of the achievements.', content: 'Fill in the details required for each categories.', expanded: false },
      { title: 'Submit supporting documentation, if applicable.', content: 'Submit supporting documents for a better chance.', expanded: false },
      { title: 'Submit the Form and Docs', content: 'Submit the form and supporting documents to anil@ippaimail.org', expanded: false }
    ];
  
    toggleItem(index: number) {
      this.items[index].expanded = !this.items[index].expanded;
    }

    register(){
      this.router.navigate(['/register']);
    }
}
