/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TrocasService } from './trocas.service';

describe('TrocasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrocasService]
    });
  });

  it('should ...', inject([TrocasService], (service: TrocasService) => {
    expect(service).toBeTruthy();
  }));
});
