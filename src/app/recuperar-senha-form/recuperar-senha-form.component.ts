import { Component } from '@angular/core';
import { Usuario } from "app/usuario";
import { UsuariosService } from "app/usuarios.service";
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-recuperar-senha-form',
  templateUrl: './recuperar-senha-form.component.html',
  styleUrls: ['./recuperar-senha-form.component.css']
})

export class RecuperarSenhaFormComponent {
  titulo = "Recuperar senha";
  email: string = '';

  constructor(private usuariosService: UsuariosService,
              private route: ActivatedRoute,
              private router: Router) {}

  recuperarSenha() {
    this.usuariosService.recuperarSenha(this.email).subscribe(
      data => alert('Enviado um e-mail para gerar nova senha'),
      error => {
        alert('Ocorreu um erro. Tente novamente mais tarde');
        console.error(error);
      }
    )
  }
}
