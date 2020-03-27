import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenomeComparison2Component } from './genome-comparison2.component';

describe('GenomeComparison2Component', () => {
  let component: GenomeComparison2Component;
  let fixture: ComponentFixture<GenomeComparison2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenomeComparison2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenomeComparison2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
