import {
  Component,
  OnInit
} from '@angular/core';
import {
  CrudProdutosService
} from "app/crud-produtos.service";
import {
  Produto
} from "app/produto";
import {
  AuthService
} from "app/login-form/auth.service";
import {
  Router,
  ActivatedRoute
} from "@angular/router";
declare var Materialize:any;

@Component({
  selector: 'app-form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})

export class FormProdutosComponent implements OnInit {
  titulo = 'Cadastro de Trocas';
  produto: Produto = new Produto;
  _id: string;
  msgErro: string;

  constructor(private servico: CrudProdutosService,
    private authService: AuthService,
    private router: Router,
    private rota: ActivatedRoute) {}

  ngOnInit() {
    this._id = this.rota.snapshot.params['cod'];

    setTimeout(() => { Materialize.updateTextFields(); }, 100);

    if (this._id) {
      this.servico.getProdutoUrl(this._id).subscribe(
        data => {
          this.produto = data;
          // setTimeout(() => { Materialize.updateTextFields(); }, 100);
        },
        error => this.msgErro = error)
    }
  }

  salvarProduto() {
    if (!this._id) {
      this.produto.dono = this.authService.idDoUsuarioLogado();

      this.servico.adiciconarProduto(this.produto).subscribe(
        produto => this.router.navigate(['/lista']),
        error => this.msgErro = error
      );
      alert("Troca " + this.produto.nome + " adicionado com sucesso!");
      this.produto = new Produto();
    } else {
      this.servico.atualizaProduto(this._id, this.produto).subscribe(
        data => this.router.navigate(['/lista']));
      error => this.msgErro = error

      alert("Móvel " + this.produto.nome + " editado com sucesso!");
    }
  }

  voltar() {
    this.router.navigate(['/lista']);
  }

  selecionaImagem($event) {
    this.lerConteudoImagem($event.target);
  }

  lerConteudoImagem(inputValue){
    const file = inputValue.files[0];
    const myReader = new FileReader();

    myReader.onloadend = (e) => {
      this.produto.image = myReader.result;
    };

    myReader.readAsDataURL(file);
  }
}
