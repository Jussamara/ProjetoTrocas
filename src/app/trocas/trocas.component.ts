import { Component, OnInit } from '@angular/core';
import { Troca } from './../troca'
import { TrocasService } from './../trocas.service'
import { AuthService } from './../login-form/auth.service'


@Component({
  selector: 'app-trocas',
  templateUrl: './trocas.component.html',
  styleUrls: ['./trocas.component.css']
})
export class TrocasComponent implements OnInit {
  solicitadas: Troca[] = [];
  recebidas: Troca[] = [];

  constructor(private trocasService: TrocasService,
              private authService: AuthService) { }

  ngOnInit() {
    const usuarioId = this.authService.idDoUsuarioLogado();

    this.trocasService.solicitadas(usuarioId).subscribe(
      data => this.solicitadas = data,
      error => console.error(error)
    );

    this.trocasService.recebidas(usuarioId).subscribe(
      data => this.recebidas = data,
      error => console.error(error)
    );
  }
}
