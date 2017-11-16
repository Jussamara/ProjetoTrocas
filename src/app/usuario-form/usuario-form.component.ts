
import { Component, OnInit } from '@angular/core';
import { Usuario } from "app/usuario";
import { UsuariosService } from "app/usuarios.service";
import { Router, ActivatedRoute} from '@angular/router';
declare var Materialize:any;
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

    if(!this.id){
      this.usuario = new Usuario();
    }
    else{
      this.servico.getUsuarioUrl(this.id).subscribe(
        data => {
          this.usuario = data;
          setTimeout(() => { Materialize.updateTextFields(); }, 100);
        },
        error => {
          if (error.status === 401) {
            this.router.navigate(['/']);
          }
        }
      )
    }
  }

  salvarUsuario(){
    if(!this.id){
      this.servico.adicionaUsuario(this.usuario).subscribe(
        usuario => this.router.navigate(['/login']),
        error => this.erro = error
        );
      alert("Usuario "+this.usuario.name+" adicionado com sucesso!");
     // this.usuario = new Usuario();
   }
   else{
      this.servico.atualizarUsuario(this.id, this.usuario).subscribe(
        data => this.router.navigate(['/login']));
        error => this.erro = error

      alert("Usuario "+this.usuario.name+" editado com sucesso!");
    }

    //this.router.navigate(['/usuario/lista']);
  }

    voltar(){
       this.router.navigate(['/login']);
  }
}
