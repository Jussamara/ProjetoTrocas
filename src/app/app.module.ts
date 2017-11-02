import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions, XHRBackend } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

import { CrudProdutosService} from "app/crud-produtos.service";
import { Observable } from 'rxjs/Rx';

import { AppComponent } from './app.component';

import { HttpService } from './http.service'
import { AuthService } from "app/login-form/auth.service";
import { AuthGuardService } from './guarda/auth-guard.service';
import { TrocasService } from "app/trocas.service";
import { UsuariosService } from "app/usuarios.service";
import { TrocasComponent } from './trocas/trocas.component';
import { AnuncioComponent } from './anuncio/anuncio.component';

import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';
import { FormProdutosComponent } from './form-produtos/form-produtos.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { UsuarioTabelaComponent } from './usuario-tabela/usuario-tabela.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { RecuperarSenhaFormComponent } from './recuperar-senha-form/recuperar-senha-form.component';
import { AlterarSenhaComponent } from './alterar-senha/alterar-senha.component';

enableProdMode();
const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'lista', component: TabelaProdutosComponent, canActivate: [ AuthGuardService ] },
  { path: 'edicao/:cod', component: FormProdutosComponent, canActivate: [ AuthGuardService ] },
  { path: 'novo', component: FormProdutosComponent, canActivate: [ AuthGuardService ] },
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginFormComponent  },
  { path: 'usuario/lista', component: UsuarioTabelaComponent, canActivate: [ AuthGuardService ] },
  { path: 'usuario/novo', component: UsuarioFormComponent },
  { path: 'usuario/recuperar-senha', component: RecuperarSenhaFormComponent },
  { path: 'usuario/alterar-senha', component: AlterarSenhaComponent },
  { path: 'refazer/:id', component: UsuarioFormComponent, canActivate: [ AuthGuardService ] },
  { path: 'trocas', component: TrocasComponent, canActivate: [ AuthGuardService ] },
  { path: 'anuncio/:id', component: AnuncioComponent },
  { path: "*", redirectTo: 'inicio' }
];
@NgModule({
  declarations: [
    AppComponent,
    TabelaProdutosComponent,
    FormProdutosComponent,
    InicioComponent,
    LoginFormComponent,
    UsuarioTabelaComponent,
    UsuarioFormComponent,
    RecuperarSenhaFormComponent,
    AlterarSenhaComponent,
    TrocasComponent,
    AnuncioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)

  ],
  providers: [
    HttpService,
    // {
    //   provide: HttpService,
    //   useFactory: (backend: XHRBackend, options: RequestOptions) => {
    //     return new HttpService(backend, options);
    //   },
    //   deps: [XHRBackend, RequestOptions]
    // },
    CrudProdutosService,
    UsuariosService,
    AuthService,
    AuthGuardService,
    TrocasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
