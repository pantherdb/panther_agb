import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesHorizontalViewerComponent } from './species-horizontal-viewer.component';

describe('SpeciesHorizontalViewerComponent', () => {
  let component: SpeciesHorizontalViewerComponent;
  let fixture: ComponentFixture<SpeciesHorizontalViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeciesHorizontalViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciesHorizontalViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
