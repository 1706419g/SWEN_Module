import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsinfoComponent } from './esinfo.component';

describe('EsinfoComponent', () => {
  let component: EsinfoComponent;
  let fixture: ComponentFixture<EsinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
