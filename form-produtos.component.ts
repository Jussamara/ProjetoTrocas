import { Component, OnInit } from '@angular/core';
import { CrudProdutosService} from "app/crud-produtos.service";
import { Produto} from "app/produto";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent implements OnInit {
  titulo = "Cadastro de Produtos";
  produto:Produto;
  codigo:number;

  constructor(private servico:CrudProdutosService,
  private router:Router,
  private rota:ActivatedRoute ) { }

  ngOnInit() {
    this.codigo= this.rota.snapshot.params['cod'];
    if(isNaN(this.codigo)){
        this.produto =new Produto();
      }
       else{
         this.produto = Object.assign({},
         this.servico.getProdutoPorCodigo(this.codigo));
       }  
  }
  salvarProduto(){
    if(isNaN(this.codigo)){
    this.servico.adidiconarProduto(this.produto);
 }
}
}

