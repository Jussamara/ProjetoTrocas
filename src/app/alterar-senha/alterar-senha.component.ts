import { Component, OnInit } from '@angular/core';
import { Usuario } from "app/usuario";
import { UsuariosService } from "app/usuarios.service";
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.css']
})

export class AlterarSenhaComponent implements OnInit {
  titulo = "Alterar senha";

  private tokenInvalido: Boolean = false;
  private token: string = '';
  private senha: string = '';

  constructor(private usuariosService: UsuariosService,
              private rota: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.token = this.rota.snapshot.queryParams['token'];

    if (!this.token) {
      this.tokenInvalido = true;
      return;
    }
  }

  alterarSenha() {
    this.usuariosService.alterarSenha(this.token, this.senha).subscribe(
      data => {
        alert('Senha alterada com sucesso!')
        this.router.navigate(['/login']);
      },
      error => {
        if (error.status == 404) {
          alert('Token invalido');
        } else {
          alert('Ocorreu um erro. Tente novamente mais tarde');
        }
        console.error(error);
      }
    )
  }
}
