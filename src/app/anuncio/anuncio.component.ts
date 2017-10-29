import { Component, OnInit } from '@angular/core';
import { Produto } from "app/produto";
import { ActivatedRoute } from "@angular/router";
import { TrocasService } from "app/trocas.service";
import { CrudProdutosService } from "app/crud-produtos.service";
import { AuthService } from "app/login-form/auth.service";
import { Router } from "@angular/router"

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit {
  produto: Produto = new Produto;
  titulo = 'Anuncio';
  msgErro: string;
  id: number;
  codigo: string;
  usuarioLogado: boolean = false;
  usuarioId: string = ''

  constructor(private servico: TrocasService,
              private produtoServico: CrudProdutosService,
              private authService: AuthService,
              private rota: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.codigo = this.rota.snapshot.params['id'];
    this.usuarioLogado = this.authService.usuarioEstaAutenticado();

    if (this.usuarioLogado) {
      this.usuarioId = this.authService.idDoUsuarioLogado();
    }

    this.buscaProduto();
  }
  buscaProduto(){
    this.produtoServico.getProdutoUrl(this.codigo).subscribe(
      data => { this.produto = data; console.log(data) },
      error => this.msgErro = error
    );
  }

  solicitarTroca() {
    const solicitanteid = this.authService.idDoUsuarioLogado();

    this.servico.trocarProduto(solicitanteid, this.produto).subscribe(
      data => alert('solicitacao efetuada'),
      error => alert('erro na troca')
    )
  }

  cancelarTroca() {
    this.servico.cancelarTroca(this.codigo, this.produto).subscribe(
      data => alert('cancelamento efetuada'),
      error => alert('erro na troca')
    )
  }

  removerTroca() {
    this.produtoServico.removerProduto(this.produto).subscribe(
      data => {
        alert('produto para troca removido');
        this.router.navigate(['/lista'])
      },
      error => alert('erro na troca')
    )
  }
}
