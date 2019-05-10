import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompradetailPage } from './compradetail.page';

describe('CompradetailPage', () => {
  let component: CompradetailPage;
  let fixture: ComponentFixture<CompradetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompradetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompradetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
