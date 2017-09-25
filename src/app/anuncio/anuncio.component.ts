import { Component, OnInit } from '@angular/core';
import { Produto } from "app/produto";
import { ActivatedRoute } from "@angular/router";
import { TrocasService } from "app/trocas.service";
import { CrudProdutosService } from "app/crud-produtos.service";

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit {

  produto: Produto;

  titulo = 'Anuncio';

  msgErro: string;
  id: number;

  codigo: number;

  constructor(private servico: TrocasService,
              private produtoServico: CrudProdutosService,
              private rota: ActivatedRoute) { }

  ngOnInit() {
    this.codigo = this.rota.snapshot.params['id'];
    this.buscaProduto();

  }
  buscaProduto(){
    this.produtoServico.getProdutoUrl(this.codigo).subscribe(
      data => this.produto = data,
      error => this.msgErro = error
    );
  }

  solicitarTroca() {
    alert('SOLICITAR troca aqui');
    this.servico.trocarProduto(this.codigo, this.produto).subscribe(
      data => alert('solicitacao efetuada'),
      error => alert('erro na troca')
    )
  }

  cancelarTroca() {
    alert('CANCELAR troca aqui');
    this.servico.cancelarTroca(this.codigo, this.produto).subscribe(
      data => alert('cancelamento efetuada'),
      error => alert('erro na troca')
    )
  }
}
