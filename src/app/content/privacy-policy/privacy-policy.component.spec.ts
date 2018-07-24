import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { privacyPolicyComponent } from './privacy-policy.component';

describe('privacyPolicyComponent', () => {
  let component: privacyPolicyComponent;
  let fixture: ComponentFixture<privacyPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ privacyPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(privacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
