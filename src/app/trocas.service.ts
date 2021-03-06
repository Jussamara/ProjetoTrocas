import { Injectable } from '@angular/core';
import { Produto } from "app/produto";
import { HttpService } from './http.service'
import { Observable } from 'rxjs/Rx';
import { Response } from '@angular/http';
import { Troca } from './troca';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class TrocasService {
  extractData: any;

   private url = "/troca";

   produto: Produto[]=[];

  constructor(private http: HttpService) { }

  trocarProduto(solicitanteId:string, produto:Produto):Observable<Produto>{
    let url = `${this.url}/solicita`;

    const solicitarTroca = {
      solicitante: solicitanteId,
      movel: produto._id,
      status: true, // 0 Pendente -  1 Done
      data: new Date()
    };

    let bodyString = JSON.stringify(solicitarTroca);

    return this.http.post(url, bodyString)
      .map((res:Response)=>{})
      .catch((error:any)=>Observable.throw(error));
  }

  cancelarTroca(produto:Produto):Observable<Produto>{
    let url = `${this.url}/cancelar`;
    let bodyString = JSON.stringify(produto);

    return this.http.post(url, bodyString)
      .map((res:Response)=>{})
      .catch((error:any)=>Observable.throw(error));
  }

  removerTroca(id: string):Observable<Boolean>{
    let url = `${this.url}/${id}`;

    return this.http.delete(url)
      .map((res:Response)=> { return true })
      .catch((error:any)=>Observable.throw(error));
  }

  solicitadas(usuarioId: string): Observable<Troca[]> {
    let url = `${this.url}/solicitadas/${usuarioId}`;

    return this.http.get(url)
      .map((res:Response) => res.json())
      .catch((error:any )=> Observable.throw(error));
  }

  recebidas(usuarioId: string): Observable<Troca[]> {
    let url = `${this.url}/recebidas/${usuarioId}`;

    return this.http.get(url)
      .map((res:Response) => res.json())
      .catch((error:any )=> Observable.throw(error));
  }
}
