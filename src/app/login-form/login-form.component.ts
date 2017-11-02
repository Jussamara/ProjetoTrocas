import { Component, OnInit } from '@angular/core';
import { Usuario } from "app/usuario";
import { AuthService } from "app/login-form/auth.service";
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  titulo = "Faça seu Login";
  returnUrl: string;
  usuario: Usuario = new Usuario();

  constructor(private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {        
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  fazerLogin() {
    this.authService.fazerLogin(this.usuario).subscribe(
      data => this.router.navigate([this.returnUrl]),
      error => alert('Senha ou usuário inválidos!')
    )
  }
}
