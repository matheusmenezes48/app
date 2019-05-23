import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovatarefamodalPage } from './novatarefamodal.page';

describe('NovatarefamodalPage', () => {
  let component: NovatarefamodalPage;
  let fixture: ComponentFixture<NovatarefamodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovatarefamodalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovatarefamodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
