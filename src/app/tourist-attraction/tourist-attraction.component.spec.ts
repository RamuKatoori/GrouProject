import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristAttractionComponent } from './tourist-attraction.component';

describe('TouristAttractionComponent', () => {
  let component: TouristAttractionComponent;
  let fixture: ComponentFixture<TouristAttractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TouristAttractionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TouristAttractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
