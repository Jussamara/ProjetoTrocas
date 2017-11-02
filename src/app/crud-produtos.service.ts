import { Injectable } from '@angular/core';
import { Produto} from "app/produto";
import { HttpService } from './http.service'
import { Observable } from 'rxjs/Rx';
import { Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class CrudProdutosService {
  extractData: any;

  private url = "/moveis";

  produto: Produto[]=[];

  constructor(private http: HttpService) { }

  getProdutos(): Observable<Produto[]>{
    return this.http.get(this.url)
      .map((res:Response) => res.json())
      .catch((error:any)=>Observable.throw(error));
  }

  adiciconarProduto(produto):Observable<Produto>{
    let bodyString = JSON.stringify(produto);
    return this.http.post(this.url, bodyString)
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
    let url = this.url+"/"+produto._id;

    return this.http.delete(url)
      .map((res:Response)=>{})
      .catch((error:any)=>Observable.throw(error));
  }

  atualizaProduto(id:string, produto:Produto):Observable<Produto>{
    let url = this.url+"/"+id;
    let bodyString = JSON.stringify(produto);

    return this.http.put(url, bodyString)
      .map((res:Response)=>{})
      .catch((error:any)=>Observable.throw(error));
  }
}
