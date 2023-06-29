import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductRelationComponent } from './add-product-relation.component';

describe('AddProductRelationComponent', () => {
  let component: AddProductRelationComponent;
  let fixture: ComponentFixture<AddProductRelationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductRelationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductRelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
