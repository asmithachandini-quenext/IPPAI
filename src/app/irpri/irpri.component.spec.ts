import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IRPRIComponent } from './irpri.component';

describe('IRPRIComponent', () => {
  let component: IRPRIComponent;
  let fixture: ComponentFixture<IRPRIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IRPRIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IRPRIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
