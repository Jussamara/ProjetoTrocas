import { Injectable } from '@angular/core';
import { Produto} from "app/produto";

import { Http, RequestOptions } from "@angular/http";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Response, Headers } from '@angular/http';


@Injectable()
export class TrocasService {
  extractData: any;

   private url = "http://localhost:8080/api/troca";

   produto: Produto[]=[];

  constructor(private http: Http) { }

  headers():RequestOptions {
		let headersParams = { 'Content-Type': 'application/json' };
    headersParams["Access-Control-Allow-Origin"] = "*";

		let headers = new Headers(headersParams);
    let options = new RequestOptions({ headers: headers });

    return options;
	}

  trocarProduto(id:number, produto:Produto):Observable<Produto>{
    let url = `${this.url}/${id}`;
    let bodyString = JSON.stringify(produto);
    let options = this.headers()

    return this.http.post(url, bodyString, options)
      .map((res:Response)=>{})
      .catch((error:any)=>Observable.throw(error));
  }

  cancelarTroca(id:number, produto:Produto):Observable<Produto>{
    let url = `${this.url}/cancelar/${id}`;
    let bodyString = JSON.stringify(produto);
    let options = this.headers()

    return this.http.post(url, bodyString, options)
      .map((res:Response)=>{})
      .catch((error:any)=>Observable.throw(error));
  }
}
