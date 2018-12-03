import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneTreeComponent } from './gene-tree.component';

describe('GeneTreeComponent', () => {
  let component: GeneTreeComponent;
  let fixture: ComponentFixture<GeneTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
