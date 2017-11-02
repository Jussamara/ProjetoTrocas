import { Injectable } from '@angular/core';
import { Usuario } from "app/usuario";
import { Produto } from "app/produto";
import { Observable } from 'rxjs/Rx';
import { Response } from '@angular/http';
import { HttpService } from './http.service'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class UsuariosService {

  private url = "/users/";

  usuarios: Usuario[] = [];

  constructor(private http: HttpService) {}

  getListaUsuarios(): Observable < Usuario[] > {
    return this.http.get(this.url)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error));
  }
  adicionaUsuario(usuario): Observable < Usuario > {
    let bodyString = JSON.stringify(usuario);

    return this.http.post(this.url, bodyString)
      .map((res: Response) => {})
      .catch((error: any) => Observable.throw(error));
  }
  getUsuarioUrl(id): Observable < Usuario > {
    let url = this.url + id;

    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error));
  }

  perfilUsuario(id): Observable < Usuario > {
    return this.http.get(`${this.url}perfil/${id}`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error));
  }

  excluirUsuario(usuario: Usuario): Observable < Usuario[] > {
    let url = this.url + usuario._id

    return this.http.delete(url)
      .map((res: Response) => {})
      .catch((error: any) => Observable.throw(error));
  }

  atualizarUsuario(id: string, usuario: Usuario): Observable < Usuario > {
    let url = this.url + id;
    let bodyString = JSON.stringify(usuario);

    return this.http.put(url, bodyString)
      .map((res: Response) => {})
      .catch((error: any) => Observable.throw(error));
  }

  getProdutosDoUsuario(usuarioId: string): Observable<Produto[]>{
    return this.http.get(`${this.url}${usuarioId}/moveis`)
      .map((res:Response) => res.json())
      .catch((error:any)=>Observable.throw(error));
  }

  recuperarSenha(email): Observable<Boolean> {
    const body = { email };
    const bodyString = JSON.stringify(body);

    return this.http.post(this.url + "recuperar-senha", bodyString)
      .map((res:Response) => true)
      .catch((error:any)=> Observable.throw(error));
  }

  alterarSenha(token, senha): Observable<Boolean> {
    const body = { token, senha };
    const bodyString = JSON.stringify(body);

    return this.http.post(this.url + "alterar-senha", bodyString)
      .map((res:Response) => true)
      .catch((error:any)=> Observable.throw(error));
  }
}
