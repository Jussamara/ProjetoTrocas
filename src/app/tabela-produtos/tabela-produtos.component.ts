import { Component, OnInit } from '@angular/core';
import { CrudProdutosService} from "app/crud-produtos.service";
import { Produto} from "app/produto";
import { ActivatedRoute } from "@angular/router";
import { error } from "util";

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent implements OnInit {
  produto: Produto;
  titulo = 'Tabela de Trocas';

  produtos:Produto[]=[];
  msgErro: string;
	id: number;

  constructor(private servico: CrudProdutosService,
              private rota: ActivatedRoute) { }

  ngOnInit() {
    this.carregarProdutos();
  }
  carregarProdutos() {
    this.servico.getProdutos().subscribe(
      data => this.produtos = data,
      error => this.msgErro = error
    );
  }
  remover(produto: Produto) {
    this.servico.removerProduto(produto).subscribe(
      data => this.carregarProdutos(),
      error => this.msgErro = error
    );
  }

}
