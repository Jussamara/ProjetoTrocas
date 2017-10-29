import { Injectable } from '@angular/core';
import { Produto } from "app/produto";

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
    const usuario = localStorage.getItem('user');
    const { token } = JSON.parse(usuario);

		let headersParams = { 'Content-Type': 'application/json' };
    headersParams["Access-Control-Allow-Origin"] = "*";
    headersParams['Authorization'] = token;

		let headers = new Headers(headersParams);
    let options = new RequestOptions({ headers: headers });

    return options;
	}

  trocarProduto(solicitanteId:string, produto:Produto):Observable<Produto>{
    let url = `${this.url}/solicita`;

    const solicitarTroca = {
      solicitante: solicitanteId,
      movel: produto._id,
      status: true, // 0 Pendente -  1 Done
      data: new Date()
    };

    let bodyString = JSON.stringify(solicitarTroca);
    let options = this.headers()

    return this.http.post(url, bodyString, options)
      .map((res:Response)=>{})
      .catch((error:any)=>Observable.throw(error));
  }

  cancelarTroca(produto:Produto):Observable<Produto>{
    let url = `${this.url}/cancelar`;
    let bodyString = JSON.stringify(produto);
    let options = this.headers()

    return this.http.post(url, bodyString, options)
      .map((res:Response)=>{})
      .catch((error:any)=>Observable.throw(error));
  }

  removerTroca(id: string):Observable<Boolean>{
    let url = `${this.url}/${id}`;
    let options = this.headers()

    return this.http.delete(url, options)
      .map((res:Response)=> { return true })
      .catch((error:any)=>Observable.throw(error));
  }
}
