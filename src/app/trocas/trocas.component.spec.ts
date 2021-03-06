/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TrocasComponent } from './trocas.component';

describe('TrocasComponent', () => {
  let component: TrocasComponent;
  let fixture: ComponentFixture<TrocasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrocasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrocasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
