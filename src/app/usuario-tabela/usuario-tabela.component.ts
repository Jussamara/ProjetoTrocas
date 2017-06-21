import { Component, OnInit } from '@angular/core';
import { UsuariosService } from "app/usuarios.service";
import { Usuario } from "app/usuario";
import { Router} from '@angular/router';

@Component({
  selector: 'app-usuario-tabela',
  templateUrl: './usuario-tabela.component.html',
  styleUrls: ['./usuario-tabela.component.css']
})
export class UsuarioTabelaComponent implements OnInit {
 titulo = "Tabela de Usuarios";
 usuarios:Usuario[] =[];
  constructor(private servico: UsuariosService){}
           // private router:Router) { }

           

  ngOnInit() {
      this.usuarios = this.servico.getListaUsuarios(); 
  }

  excluirUsuario(indice:number){
    this.servico.excluirUsuario(indice);
  }  

}
