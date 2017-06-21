import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

    titulo = "Troca Móveis, renovando o seu ambiente!";
    //carrossel
    // carrosel = "  $('.carousel.carousel-slider').carousel({fullWidth: true});";

    //cards
    urlImagem = "https://http2.mlstatic.com/D_Q_NP_393825-MLB25504499706_042017-H.webp";
    Image = "https://http2.mlstatic.com/D_Q_NP_888125-MLB25393471659_022017-H.webp";
    rack = "https://www.r3store.com.br/img/products/rack-fusion-e-painel-karina-2200mm-knr-moveis-suporte-para-tv-gratis_1_1200.jpg";
 
  
  constructor() { }

  ngOnInit() {
    
  }

}
