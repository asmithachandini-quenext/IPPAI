import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerAwardsComponent } from './power-awards.component';

describe('PowerAwardsComponent', () => {
  let component: PowerAwardsComponent;
  let fixture: ComponentFixture<PowerAwardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerAwardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PowerAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
