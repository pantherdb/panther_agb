import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesD3TreeComponent } from './species-expandable-tree.component';

describe('SpeciesD3TreeComponent', () => {
  let component: SpeciesD3TreeComponent;
  let fixture: ComponentFixture<SpeciesD3TreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeciesD3TreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciesD3TreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
