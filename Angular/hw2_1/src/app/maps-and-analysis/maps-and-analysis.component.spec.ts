import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsAndAnalysisComponent } from './maps-and-analysis.component';

describe('MapsAndAnalysisComponent', () => {
  let component: MapsAndAnalysisComponent;
  let fixture: ComponentFixture<MapsAndAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapsAndAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsAndAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
