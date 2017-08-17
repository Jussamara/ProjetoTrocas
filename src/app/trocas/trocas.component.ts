import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trocas',
  templateUrl: './trocas.component.html',
  styleUrls: ['./trocas.component.css']
})
export class TrocasComponent implements OnInit {
   urlImagem = "https://http2.mlstatic.com/D_Q_NP_393825-MLB25504499706_042017-H.webp";
    Image = "https://http2.mlstatic.com/D_Q_NP_888125-MLB25393471659_022017-H.webp";

  constructor() { }

  ngOnInit() {
  }

}
