import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizTransferedGenesTableComponent } from './horiz-transfered-genes-table.component';

describe('HorizTransferedGenesTableComponent', () => {
  let component: HorizTransferedGenesTableComponent;
  let fixture: ComponentFixture<HorizTransferedGenesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizTransferedGenesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizTransferedGenesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
