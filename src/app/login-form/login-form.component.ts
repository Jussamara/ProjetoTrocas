import { Component, OnInit } from '@angular/core';

import { Usuario } from "app/usuario";
import { AuthService } from "app/login-form/auth.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
 titulo = "Faça seu Login";

 private usuario: Usuario = new Usuario();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  fazerLogin(){
    this.authService.fazerLogin(this.usuario).subscribe(
      data => {},
      error => {}
    )
  }

}
