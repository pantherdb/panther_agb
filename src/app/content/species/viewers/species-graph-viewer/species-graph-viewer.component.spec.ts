import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesViewerComponent } from './species-viewer.component';

describe('SpeciesViewerComponent', () => {
  let component: SpeciesViewerComponent;
  let fixture: ComponentFixture<SpeciesViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeciesViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciesViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
