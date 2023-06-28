import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindComponent } from './admind.component';

describe('AdmindComponent', () => {
  let component: AdmindComponent;
  let fixture: ComponentFixture<AdmindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
