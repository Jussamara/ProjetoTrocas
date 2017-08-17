import { Component, OnInit } from '@angular/core';
import { Produto } from "app/produto";
import { ActivatedRoute } from "@angular/router";
import { CrudProdutosService } from "app/crud-produtos.service";

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit {

  produto: Produto;
  titulo = 'Anuncio';

  produtos: Produto[] = [];

  msgErro: string;
  id: number;

  constructor(private servico: CrudProdutosService,
              private rota: ActivatedRoute) { }

  ngOnInit() {

    this.carregarProdutos();

  }
  carregarProdutos(){
    this.servico.getProdutos().subscribe(
      data => this.produtos = data,
      error => this.msgErro = error
    );
  }
}
