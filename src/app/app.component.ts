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
  constructor(private authService: AuthService) {
    const autenticado = this.authService.usuarioEstaAutenticado();

    if (autenticado) {
      this.mostrarMenu = autenticado;
      // this.authService.mostrarMenuEmitter.emit(autenticado);
      this.authService.restaurarSessaoUsuario();
    }
  }

  ngOnInit() {
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }

  deslogarUsuario() {
    this.authService.logout();
  }
}
