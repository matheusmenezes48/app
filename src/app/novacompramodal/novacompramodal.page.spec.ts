import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovacompramodalPage } from './novacompramodal.page';

describe('NovacompramodalPage', () => {
  let component: NovacompramodalPage;
  let fixture: ComponentFixture<NovacompramodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovacompramodalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovacompramodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
