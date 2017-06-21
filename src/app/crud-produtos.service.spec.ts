/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CrudProdutosService } from './crud-produtos.service';

describe('CrudProdutosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudProdutosService]
    });
  });

  it('should ...', inject([CrudProdutosService], (service: CrudProdutosService) => {
    expect(service).toBeTruthy();
  }));
});
