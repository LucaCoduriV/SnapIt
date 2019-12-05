/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GallerieComponent } from './gallerie.component';

describe('GallerieComponent', () => {
  let component: GallerieComponent;
  let fixture: ComponentFixture<GallerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
