import { Component, OnInit } from '@angular/core';
import { Produto } from "app/produto";
import { CrudProdutosService } from "app/crud-produtos.service";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

    titulo = "Troca Móveis, renovando o seu ambiente!";
    msgErro: string;

    produtos:Produto[]=[];


  constructor(private servico: CrudProdutosService) { }

  ngOnInit() {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.servico.getProdutos().subscribe(
      data => this.produtos = data,
      error => this.msgErro = error
    )
  }
}
