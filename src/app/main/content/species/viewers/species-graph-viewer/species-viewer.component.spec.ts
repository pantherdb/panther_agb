import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesGraphViewerComponent } from './species-viewer.component';

describe('SpeciesViewerComponent', () => {
  let component: SpeciesGraphViewerComponent;
  let fixture: ComponentFixture<SpeciesGraphViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpeciesGraphViewerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciesGraphViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
