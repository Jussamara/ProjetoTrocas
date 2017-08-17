import { Component, OnInit } from '@angular/core';
import { UsuariosService } from "app/usuarios.service";
import { Usuario } from "app/usuario";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-usuario-tabela',
  templateUrl: './usuario-tabela.component.html',
  styleUrls: ['./usuario-tabela.component.css']
})
export class UsuarioTabelaComponent implements OnInit {
 titulo = "Tabela de Usuarios";
 usuarios:Usuario[];
 erro: string;

  constructor(private servico: UsuariosService){}
  ngOnInit() {
    this.carregarLista();

      // this.servico.getListaUsuarios().subscribe(
       //  usuario => this.usuarios = usuario); 
  }
    carregarLista(){
      this.servico.getListaUsuarios().subscribe(
        data => this.usuarios = data,
        error => this.erro = error
      );
  }

  excluirUsuario(usuario:Usuario){
    this.servico.excluirUsuario(usuario).subscribe(
        data => this.carregarLista(),
        error => this.erro = error
        );
  }  

}
