import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DenovoGenesTableComponent } from './denovo-genes-table.component';

describe('DenovoGenesTableComponent', () => {
  let component: DenovoGenesTableComponent;
  let fixture: ComponentFixture<DenovoGenesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenovoGenesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenovoGenesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
