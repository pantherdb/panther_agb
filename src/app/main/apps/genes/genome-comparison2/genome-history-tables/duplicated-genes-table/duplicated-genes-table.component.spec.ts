import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicatedGenesTableComponent } from './duplicated-genes-table.component';

describe('DuplicatedGenesTableComponent', () => {
  let component: DuplicatedGenesTableComponent;
  let fixture: ComponentFixture<DuplicatedGenesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuplicatedGenesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplicatedGenesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
