import { Component, OnInit } from '@angular/core';
import { CrudProdutosService} from "app/crud-produtos.service";
import { Produto} from "app/produto";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent implements OnInit {
  produto: Produto;
  titulo = "Tabela de Trocas";

  produtos:Produto[]=[];
  private msgErro: string;
	private id: number;

  constructor(private servico:CrudProdutosService, 
              private rota:ActivatedRoute) { }

  ngOnInit() {
    
 this.servico.getProdutos().subscribe(
           produtos => this.produtos = produtos);
   
    
  }
  remover(produto:Produto){
    this.servico.removerProduto(produto);
  }

}
