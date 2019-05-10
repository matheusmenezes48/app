import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacomprasPage } from './listacompras.page';

describe('ListacomprasPage', () => {
  let component: ListacomprasPage;
  let fixture: ComponentFixture<ListacomprasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListacomprasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListacomprasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
