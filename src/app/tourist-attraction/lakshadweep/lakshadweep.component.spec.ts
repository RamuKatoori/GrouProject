import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LakshadweepComponent } from './lakshadweep.component';

describe('LakshadweepComponent', () => {
  let component: LakshadweepComponent;
  let fixture: ComponentFixture<LakshadweepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LakshadweepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LakshadweepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
