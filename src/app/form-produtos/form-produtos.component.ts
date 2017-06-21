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
  titulo = "Cadastro de Trocas";
  produto:Produto;
  id:number;
  private msgErro:string;

  constructor(private servico:CrudProdutosService,
  private router:Router,
  private rota:ActivatedRoute ) { }

  ngOnInit() {
    this.id= this.rota.snapshot.params['cod'];
    if(isNaN(this.id)){
        this.produto =new Produto();
      }
       else{
    
         this.servico.getProduto(this.id).subscribe(
           produto => this.produto = produto);
       }  
  }
  salvarProduto(){
    if(isNaN(this.id)){
    this.servico.adidiconarProduto(this.produto).subscribe(
      produto => this.produto = produto
    );
    alert("Troca "+this.produto.nome+" adicionado com sucesso!");
      this.produto = new Produto();  
 }
 else{
   this.servico.atualizaProduto(this.produto).subscribe(
     produto => this.router.navigate(['/lista']));
   
  
    alert("Móvel "+this.produto.nome+" editado com sucesso!");   
 }
    this.router.navigate(['/lista']);
}
    voltar(){
      this.router.navigate(['/lista']);
    }
}

