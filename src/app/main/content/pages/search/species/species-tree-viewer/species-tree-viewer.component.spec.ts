import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesTreeViewerComponent } from './species-tree-viewer.component';

describe('SpeciesTreeViewerComponent', () => {
  let component: SpeciesTreeViewerComponent;
  let fixture: ComponentFixture<SpeciesTreeViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeciesTreeViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciesTreeViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
