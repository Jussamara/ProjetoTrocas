import { Injectable } from '@angular/core';
import { Produto} from "app/produto";

import { Http, RequestOptions } from "@angular/http";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Response, Headers } from '@angular/http';


@Injectable()
export class CrudProdutosService {
  extractData: any;

  private url = "http://localhost:8080/api/moveis";

  produto: Produto[]=[];

  constructor(private http: Http) { }

  headers(): RequestOptions {
		let headersParams = { 'Content-Type': 'application/json' };
    headersParams["Access-Control-Allow-Origin"] = "*";

    const usuario = localStorage.getItem('user');

    if (usuario) {
      const { token } = JSON.parse(usuario);
      headersParams['Authorization'] = token;
    }

		let headers = new Headers(headersParams);
    let options = new RequestOptions({ headers: headers });

    return options;
	}
  getProdutos(): Observable<Produto[]>{
    let headers = this.headers();

    return this.http.get(this.url, headers)
      .map((res:Response) => res.json())
      .catch((error:any)=>Observable.throw(error));
  }

  adiciconarProduto(produto):Observable<Produto>{
    let bodyString = JSON.stringify(produto);
    let headers = this.headers();

    return this.http.post(this.url, bodyString, headers)
      .map((res:Response)=>{})
      .catch((error:any)=>Observable.throw(error));
  }

  getProdutoUrl(id):Observable<Produto>{
    let url = this.url + "/" + id;
    let headers = this.headers()

    return this.http.get(url, headers)
      .map((res:Response)=>res.json())
      .catch((error:any)=>Observable.throw(error));
  }

  removerProduto(produto:Produto): Observable<Produto[]>{
    let url = this.url+"/"+produto._id;

    return this.http.delete(url)
      .map((res:Response)=>{})
      .catch((error:any)=>Observable.throw(error));
  }

  atualizaProduto(id:string, produto:Produto):Observable<Produto>{
    let url = this.url+"/"+id;
    let bodyString = JSON.stringify(produto);

    let headers = new Headers({'Content-Type':'application/json'})
    let options = new RequestOptions({headers:headers});

    return this.http.put(url, bodyString, options)
      .map((res:Response)=>{})
      .catch((error:any)=>Observable.throw(error));
  }
}
