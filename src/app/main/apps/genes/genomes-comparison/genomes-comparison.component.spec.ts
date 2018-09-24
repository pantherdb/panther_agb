import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenomesComparisonComponent } from './genomes-comparison.component';

describe('GenomesComparisonComponent', () => {
  let component: GenomesComparisonComponent;
  let fixture: ComponentFixture<GenomesComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenomesComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenomesComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
