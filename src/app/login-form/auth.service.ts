import { Injectable } from '@angular/core';
import { Usuario } from "app/usuario";
import { Router } from "@angular/router";
import { HttpService } from './../http.service'
import { Response } from "@angular/http";
import { EventEmitter } from "@angular/common/src/facade/async";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;
  private usuario: Usuario = new Usuario;
  private url = "http://localhost:8080/api/login";

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router, private http: HttpService) { }

  fazerLogin(usuario:Usuario){
    const {
      email,
      senha
    } = usuario;

    const bodyString = JSON.stringify({ email, senha });

    return this.http.post(this.url, bodyString)
      .map((res:Response)=>{
        this.usuarioAutenticado = true;
        this.usuario = res.json();
        localStorage.setItem('user', JSON.stringify(this.usuario));
        this.mostrarMenuEmitter.emit(true);
        this.router.navigate(['/']);
      })
      .catch((error:any)=> {
        this.usuarioAutenticado = false;
        this.mostrarMenuEmitter.emit(false);
        return Observable.throw(error);
      });
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

  idDoUsuarioLogado () {
    return this.usuario._id.toString();
  }
}
