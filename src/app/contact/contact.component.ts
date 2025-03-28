import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  
  tabs = [
    { label: 'Bengaluru', content: '2nd Floor, Diamond House, 11 Primrose Road, Bengaluru - 560025 +91 97170 63202', active: true, image:'assets/images/Screenshot-2024-05-21-at-1.46.00-PM.png' },
    { label: 'Belagavi', content: 'Village Belgundi, Belagavi - Karnataka +91 973969 4242', active: false },
    { label: 'Delhi', content: 'UG-22, Somdatt Chamber-1, 5 Bhikaji Cama Place, New Delhi - 110066 +91 98732 34386', active: false }
  ];

  activateTab(index: number): void {
    this.tabs.forEach((tab, i) => tab.active = i === index);
  }
}