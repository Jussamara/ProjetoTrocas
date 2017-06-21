import { Injectable } from '@angular/core';
import { Produto} from "app/produto";

import { Http } from "@angular/http";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CrudProdutosService {

   private url: string = "http://localhost:8080/CrudProdutos/webresources/produto";

  constructor(private http: Http) { }

    getProdutos(){
    return this.http.get(this.url)
      .map(res => res.json());
  }
  getProduto(id){
    return this.http.get(this.getProdutoUrl(id))
      .map(res => res.json());
  }
/*
  post(id: any, val: any){
    var json = JSON.stringify(val);
    var params = json;
    var headers = new Headers();

      return this.http.put(''+id+'/',params,
        {headers: headers}).map(res => res.json());

  }*/
  
    adidiconarProduto(produto){
    return this.http.post(this.url, JSON.stringify(produto))
      .map(res => res.json());
  }
   private getProdutoUrl(id){
    return this.url + "/" + id;
  }
    removerProduto(id){
    return this.http.delete(this.getProdutoUrl(id))
      .map(res => res.json());
  }
   atualizaProduto(produto){
    return this.http.put(this.getProdutoUrl(produto.id), JSON.stringify(produto))
      .map(res => res.json());
  }


}