import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListatarefaPage } from './listatarefa.page';

describe('ListatarefaPage', () => {
  let component: ListatarefaPage;
  let fixture: ComponentFixture<ListatarefaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListatarefaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListatarefaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
