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
  constructor(private authServie: AuthService){

  }
  ngOnInit(){
    this.authServie.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu=mostrar
    );
  }
}
