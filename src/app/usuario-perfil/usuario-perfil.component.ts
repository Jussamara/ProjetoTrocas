
import { Component, OnInit } from '@angular/core';
import { Usuario } from "app/usuario";
import { UsuariosService } from "app/usuarios.service";
import { Produto } from "app/produto";
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-usuario-perfil',
  templateUrl: './usuario-perfil.component.html',
  styleUrls: ['./usuario-perfil.component.css']
})

export class UsuarioPerfilComponent implements OnInit {
  titulo = "Cadastro de Usuários";
  id: string = '';
  usuario: Usuario = new Usuario();
  produtos: Produto[]=[];
  erro: string;

  constructor(private usuarioService:UsuariosService,
              private router:Router,
               private rota: ActivatedRoute) {}
  ngOnInit() {
    this.id = this.rota.snapshot.params['id'];

    this.usuarioService.perfilUsuario(this.id).subscribe(
      data => {
        this.usuario = data;
        this.carregarProdutos();
      },
      error => {
        this.erro = error;
      }
    )
  }

  carregarProdutos() {
    this.usuarioService.getProdutosDoUsuario(this.id).subscribe(
      data => this.produtos = data,
      error => console.error(error)
    );
  }
}
