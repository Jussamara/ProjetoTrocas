import {
  Injectable
} from '@angular/core';
import {
  Usuario
} from "app/usuario";

import {
  Http,
  RequestOptions
} from "@angular/http";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {
  Observable
} from 'rxjs/Rx';
import {
  Response,
  Headers
} from '@angular/http';


@Injectable()
export class UsuariosService {
  extracData: any;

  private url = "http://localhost:8080/api/users/";

  usuarios: Usuario[] = [];


  constructor(private http: Http) {}

  headers(): RequestOptions {
    let headersParams = {
      'Content-Type': 'application/json'
    };
    headersParams["Access-Control-Allow-Origin"] = "*";

    //	if (localStorage['token']) {
    //	headersParams['Authorization'] = localStorage['token'];
    //}
    let headers = new Headers(headersParams);
    let options = new RequestOptions({
      headers: headers
    });
    return options;
  }
  getListaUsuarios(): Observable < Usuario[] > {
    return this.http.get(this.url)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error));
  }
  adicionaUsuario(usuario): Observable < Usuario > {
    let bodyString = JSON.stringify(usuario);

    let headers = new Headers({
      'Content-Type': 'application/json'
    })
    let options = new RequestOptions({
      headers: headers
    });
    return this.http.post(this.url,
        bodyString, options)
      .map((res: Response) => {})
      .catch((error: any) => Observable.throw(error));
  }
  getUsuarioUrl(id): Observable < Usuario > {
    let url = this.url + id;
    return this.http.get(url)
      .map((res: Response) => res.json().pop())
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

    let headers = new Headers({
      'Content-Type': 'application/json'
    })
    let options = new RequestOptions({
      headers: headers
    });
    return this.http.put(url,
        bodyString, options)
      .map((res: Response) => {})
      .catch((error: any) => Observable.throw(error));
  }
}
