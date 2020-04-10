import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectInheritedGenesTableComponent } from './direct-inherited-genes-table.component';

describe('DirectInheritedGenesTableComponent', () => {
  let component: DirectInheritedGenesTableComponent;
  let fixture: ComponentFixture<DirectInheritedGenesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectInheritedGenesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectInheritedGenesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
