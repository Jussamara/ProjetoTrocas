
import { Component, OnInit } from '@angular/core';
import { Usuario } from "app/usuario";
import { UsuariosService } from "app/usuarios.service";
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  titulo = "Cadastro de Usuários";
  usuario: Usuario = new Usuario();
  erro: string;
  id: string;

  constructor(private servico:UsuariosService,
              private router:Router,
               private rota: ActivatedRoute) {}
  ngOnInit() {

    this.id = this.rota.snapshot.params['id'];

    console.log('ID ', this.id);

    if(!this.id){
      this.usuario = new Usuario();
    }
    else{
      this.servico.getUsuarioUrl(this.id).subscribe(
        data => this.usuario = data,
        error => this.erro = error
      )
    }
  }

  salvarUsuario(){
    if(!this.id){
      this.servico.adicionaUsuario(this.usuario).subscribe(
        usuario => this.router.navigate(['/usuariolista']),
        error => this.erro = error
        );
      alert("Usuario "+this.usuario.name+" adicionado com sucesso!");
     // this.usuario = new Usuario();
   }
   else{
      this.servico.atualizarUsuario(this.id, this.usuario).subscribe(
        data => this.router.navigate(['/usuariolista']));
        error => this.erro = error

      alert("Usuario "+this.usuario.name+" editado com sucesso!");
    }

    //this.router.navigate(['/usuariolista']);
  }

    voltar(){
       this.router.navigate(['/usuariolista']);
  }
}
