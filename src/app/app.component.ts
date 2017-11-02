import { Component } from '@angular/core';
import { AuthService } from "app/login-form/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Troca Móveis';
  mostrarMenu: boolean = false;
  isAdmin: boolean = false;
  usuarioId: string = '';

  constructor(private authService: AuthService) {
    const autenticado = this.authService.usuarioEstaAutenticado();

    if (autenticado) {
      this.mostrarMenu = autenticado;
      this.authService.restaurarSessaoUsuario();
      this.isAdmin = this.authService.isAdmin();
      this.usuarioId = this.authService.idDoUsuarioLogado();
    }
  }

  ngOnInit() {
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => {
        this.mostrarMenu = mostrar;
        this.usuarioId = this.authService.idDoUsuarioLogado();
        this.isAdmin = this.authService.isAdmin();
      }
    );
  }

  deslogarUsuario() {
    this.authService.logout();
  }
}
