import { Injectable } from '@angular/core';
import { Usuario } from "app/usuario";


@Injectable()
export class UsuariosService {
  
  usuarios: Usuario[] = [];
  autoIncremento: number=1
  constructor() {}
  getListaUsuarios(){
    return this.usuarios;
  }
   adicionaUsuario(usuario:Usuario){
     usuario.codigo=this.autoIncremento++;
    this.usuarios.push(usuario);
  }

   excluirUsuario(indice:number){
    this.usuarios.splice(indice,1);
  }
  getUsuarioPorCodigo(codigo:number){
    return(this.usuarios.find(Usuario=>Usuario.codigo==codigo));

  }
  
  getUsuario(indice:number){
    return(this.usuarios[indice]);    
  }

   atualizarUsuario(codigo:number, usuario:Usuario){
     let indice = this.usuarios.indexOf(this.getUsuarioPorCodigo(codigo), 0)
    this.usuarios[indice] = usuario;
  }
}
