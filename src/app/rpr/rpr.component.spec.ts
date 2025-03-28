import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RPRComponent } from './rpr.component';

describe('RPRComponent', () => {
  let component: RPRComponent;
  let fixture: ComponentFixture<RPRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RPRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RPRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
