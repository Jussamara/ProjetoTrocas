import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CrudProdutosService} from "app/crud-produtos.service";
import { Observable } from 'rxjs/Rx';


import { AppComponent } from './app.component';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';
import { FormProdutosComponent } from './form-produtos/form-produtos.component';
import { RouterModule, Routes} from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { UsuarioTabelaComponent } from './usuario-tabela/usuario-tabela.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuariosService } from "app/usuarios.service";
import { AuthService } from "app/login-form/auth.service";

import { AuthGuardService } from './guarda/auth-guard.service';


enableProdMode();
const routes :Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'lista', component: TabelaProdutosComponent },
  { path: 'edicao/:cod', component: FormProdutosComponent },
  { path: 'novo', component: FormProdutosComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginFormComponent  },
  { path: 'usuariolista', component: UsuarioTabelaComponent },
  { path: 'usuarionovo', component: UsuarioFormComponent },
  { path: 'refazer/:ind', component: UsuarioFormComponent },  
];
@NgModule({
  declarations: [
    AppComponent,
    TabelaProdutosComponent,
    FormProdutosComponent,
    InicioComponent,
    LoginFormComponent,
    UsuarioTabelaComponent,
    UsuarioFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)

  ],
  providers: [CrudProdutosService, UsuariosService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
