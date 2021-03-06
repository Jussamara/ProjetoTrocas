import { Component, OnInit } from '@angular/core';
import { Produto } from "app/produto";
import { ActivatedRoute, Router } from "@angular/router";
import { TrocasService } from "app/trocas.service";
import { CrudProdutosService } from "app/crud-produtos.service";
import { AuthService } from "app/login-form/auth.service";
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
  trocaSolicitada: boolean = false;

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
      data => {
        this.trocaSolicitada = data['trocaSolicitada'];
        this.produto = data;
      },
      error => this.msgErro = error
    );
  }

  solicitarTroca() {
    const solicitanteid = this.authService.idDoUsuarioLogado();

    this.servico.trocarProduto(solicitanteid, this.produto).subscribe(
      data => {
        alert('solicitacao efetuada');
        this.router.navigate(['/trocas'])
      },
      error => {
        if (error.status == 400) {
          alert('Você precisa ter algum móvel cadastrado para solicitar uma troca.')
        } else {
          alert('Ocorreu um erro. Tente novamente!')
        }
      }
    )
  }

  cancelarTroca() {
    this.servico.cancelarTroca(this.produto).subscribe(
      data => {
        alert('cancelamento efetuada');
        this.router.navigate(['/'])
      },
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
