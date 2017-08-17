
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
  codigo: number;

  constructor(private servico:UsuariosService,
              private router:Router, 
               private rota: ActivatedRoute) {}
  ngOnInit() {

    this.codigo = this.rota.snapshot.params['id'];

    if(isNaN(this.codigo)){
      this.usuario = new Usuario();    
    }
    else{
      this.servico.getUsuarioUrl(this.codigo).subscribe(
        data => this.usuario = data,
        error => this.erro = error
      )
    }
  }
    salvarUsuario(){  
    if(isNaN(this.codigo)){
      console.log(this.usuario);
      this.servico.adicionaUsuario(this.usuario).subscribe(
        usuario => this.router.navigate(['/usuariolista']),
        error => this.erro = error
        );
      alert("Usuario "+this.usuario.nome+" adicionado com sucesso!");
     // this.usuario = new Usuario(); 
   }  
   else{
      this.servico.atualizarUsuario(this.codigo, this.usuario).subscribe(
        data => this.router.navigate(['/usuariolista']));
        error => this.erro = error
      
      alert("Usuario "+this.usuario.nome+" editado com sucesso!");
    }
    
    //this.router.navigate(['/usuariolista']);
  }

    voltar(){
       this.router.navigate(['/usuariolista']);
  }
}
