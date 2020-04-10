import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LossGenesTableComponent } from './loss-genes-table.component';

describe('LossGenesTableComponent', () => {
  let component: LossGenesTableComponent;
  let fixture: ComponentFixture<LossGenesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LossGenesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LossGenesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
