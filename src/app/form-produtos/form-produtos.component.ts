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
  titulo = 'Cadastro de Trocas';
  produto: Produto = new Produto;
  id: number;
  msgErro: string;

  constructor(private servico: CrudProdutosService,
  private router: Router,
  private rota: ActivatedRoute ) { }

  ngOnInit() {
    this.id = this.rota.snapshot.params['cod'];

    if (isNaN(this.id)) {
        this.produto = new Produto();
      }
       else {
           this.servico.getProdutoUrl(this.id).subscribe(
           data => this.produto = data,
           error => this.msgErro = error)}
  }
  salvarProduto() {
    if (isNaN(this.id)) {
    console.log(this.produto);
    this.servico.adiciconarProduto(this.produto).subscribe(
      produto => this.router.navigate(['/lista']),
      error => this.msgErro = error
    );
    alert ("Troca " + this.produto.nome + " adicionado com sucesso!");
      this.produto = new Produto();
 }
 else {
   this.servico.atualizaProduto(this.id, this.produto).subscribe(
     data => this.router.navigate(['/lista']));
     error => this.msgErro = error


    alert("Móvel "+this.produto.nome + " editado com sucesso!");
  }
}
    voltar() {
      this.router.navigate(['/lista']);
    }
}

