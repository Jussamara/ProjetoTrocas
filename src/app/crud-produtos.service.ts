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

   private url = "http://localhost:8080/ProjetoTrocas/webresources/produtos";

   produto: Produto[]=[];

  constructor(private http: Http) { }

  headers():RequestOptions {
		let headersParams = { 'Content-Type': 'application/json' };
    headersParams["Access-Control-Allow-Origin"] = "*";

		//if (localStorage['token']) {
		//	headersParams['Authorization'] = localStorage['token'];
 // }
		let headers = new Headers(headersParams);
    	let options = new RequestOptions({ headers: headers });
    	return options;
	}
  getProdutos(): Observable<Produto[]>{
    return this.http.get(this.url)
    .map((res:Response) => res.json())
    .catch((error:any)=>Observable.throw(error));
  }

    adiciconarProduto(produto):Observable<Produto>{
      let bodyString = JSON.stringify(produto);
      console.log(bodyString);
      let headers = new Headers({'Content-Type':'application/json'})
      let options = new RequestOptions({headers:headers});
      return this.http.post(this.url, bodyString, options)
        .map((res:Response)=>{})
        .catch((error:any)=>Observable.throw(error));
  }
    getProdutoUrl(id):Observable<Produto>{
        let url = this.url + "/" + id;
        return this.http.get(url)        
          .map((res:Response)=>res.json())
          .catch((error:any)=>Observable.throw(error));
  }
    removerProduto(produto:Produto): Observable<Produto[]>{
      let url = this.url+"/"+produto.id
    return this.http.delete(url)
    .map((res:Response)=>{})
    .catch((error:any)=>Observable.throw(error));
  }
   atualizaProduto(id:number, produto:Produto):Observable<Produto>{
        let url = this.url+"/"+id;
        let bodyString = JSON.stringify(produto);
        console.log(bodyString);
        let headers = new Headers({'Content-Type':'application/json'})
        let options = new RequestOptions({headers:headers});
    return this.http.put(url, 
    bodyString, options)
    .map((res:Response)=>{})
    .catch((error:any)=>Observable.throw(error));
  }
}