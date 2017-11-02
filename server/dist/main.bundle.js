webpackJsonp([1,5],{

/***/ 1144:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(545);


/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrudProdutosService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CrudProdutosService = (function () {
    function CrudProdutosService(http) {
        this.http = http;
        this.url = "/moveis";
        this.produto = [];
    }
    CrudProdutosService.prototype.getProdutos = function () {
        return this.http.get(this.url)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error); });
    };
    CrudProdutosService.prototype.adiciconarProduto = function (produto) {
        var bodyString = JSON.stringify(produto);
        return this.http.post(this.url, bodyString)
            .map(function (res) { })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error); });
    };
    CrudProdutosService.prototype.getProdutoUrl = function (id) {
        var url = this.url + "/" + id;
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error); });
    };
    CrudProdutosService.prototype.removerProduto = function (produto) {
        var url = this.url + "/" + produto._id;
        return this.http.delete(url)
            .map(function (res) { })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error); });
    };
    CrudProdutosService.prototype.atualizaProduto = function (id, produto) {
        var url = this.url + "/" + id;
        var bodyString = JSON.stringify(produto);
        return this.http.put(url, bodyString)
            .map(function (res) { })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error); });
    };
    CrudProdutosService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === 'function' && _a) || Object])
    ], CrudProdutosService);
    return CrudProdutosService;
    var _a;
}());
//# sourceMappingURL=/Users/thiagodorneles/Projects/jussamara/ProjetoTrocas/src/crud-produtos.service.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpService = (function (_super) {
    __extends(HttpService, _super);
    function HttpService(backend, options) {
        options.headers.set('Content-Type', "application/json");
        _super.call(this, backend, options);
    }
    HttpService.prototype.request = function (request, options) {
        var usuario = localStorage.getItem('user');
        if (usuario) {
            var token = JSON.parse(usuario).token;
            if (typeof request === 'string') {
                if (!options) {
                    // let's make option object
                    options = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]() };
                }
                // options.headers.set('Authorization', `Bearer ${token}`);
                options.headers.set('Authorization', "" + token);
            }
            else {
                // we have to add the token to the url object
                // url.headers.set('Authorization', `Bearer ${token}`);
                request.headers.set('Authorization', "" + token);
            }
        }
        var baseUrl = process.env.NODE_ENV === 'production' ?
            'api-tccprojetotrocas.herokuapp.com/api' :
            'http://localhost:8080/api';
        request.url = "" + baseUrl + request.url;
        return _super.prototype.request.call(this, request, options).catch(this.catchAuthError(this));
    };
    HttpService.prototype.catchAuthError = function (self) {
        // we have to pass HttpService's own instance here as `self`
        return function (res) {
            console.log(res);
            if (res.status === 401 || res.status === 403) {
                // if not authenticated
                console.log(res);
            }
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(res);
        };
    };
    HttpService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* XHRBackend */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* XHRBackend */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]) === 'function' && _b) || Object])
    ], HttpService);
    return HttpService;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]));
//# sourceMappingURL=/Users/thiagodorneles/Projects/jussamara/ProjetoTrocas/src/http.service.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(281)))

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Usuario; });
var Usuario = (function () {
    function Usuario() {
    }
    return Usuario;
}());
//# sourceMappingURL=/Users/thiagodorneles/Projects/jussamara/ProjetoTrocas/src/usuario.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrocasService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TrocasService = (function () {
    function TrocasService(http) {
        this.http = http;
        this.url = "/troca";
        this.produto = [];
    }
    TrocasService.prototype.trocarProduto = function (solicitanteId, produto) {
        var url = this.url + "/solicita";
        var solicitarTroca = {
            solicitante: solicitanteId,
            movel: produto._id,
            status: true,
            data: new Date()
        };
        var bodyString = JSON.stringify(solicitarTroca);
        return this.http.post(url, bodyString)
            .map(function (res) { })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error); });
    };
    TrocasService.prototype.cancelarTroca = function (produto) {
        var url = this.url + "/cancelar";
        var bodyString = JSON.stringify(produto);
        return this.http.post(url, bodyString)
            .map(function (res) { })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error); });
    };
    TrocasService.prototype.removerTroca = function (id) {
        var url = this.url + "/" + id;
        return this.http.delete(url)
            .map(function (res) { return true; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error); });
    };
    TrocasService.prototype.solicitadas = function (usuarioId) {
        var url = this.url + "/solicitadas/" + usuarioId;
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error); });
    };
    TrocasService.prototype.recebidas = function (usuarioId) {
        var url = this.url + "/recebidas/" + usuarioId;
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error); });
    };
    TrocasService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === 'function' && _a) || Object])
    ], TrocasService);
    return TrocasService;
    var _a;
}());
//# sourceMappingURL=/Users/thiagodorneles/Projects/jussamara/ProjetoTrocas/src/trocas.service.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Endereco */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Produto; });
var Endereco = (function () {
    function Endereco() {
    }
    return Endereco;
}());
var Produto = (function () {
    function Produto() {
        this.endereco = new Endereco();
    }
    return Produto;
}());
//# sourceMappingURL=/Users/thiagodorneles/Projects/jussamara/ProjetoTrocas/src/produto.js.map

/***/ }),

/***/ 544:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 544;


/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(670);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/thiagodorneles/Projects/jussamara/ProjetoTrocas/src/main.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_usuario__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_src_facade_async__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AuthService = (function () {
    function AuthService(router, http) {
        this.router = router;
        this.http = http;
        this.usuario = new __WEBPACK_IMPORTED_MODULE_1_app_usuario__["a" /* Usuario */];
        this.url = "/login";
        this.mostrarMenuEmitter = new __WEBPACK_IMPORTED_MODULE_4__angular_common_src_facade_async__["a" /* EventEmitter */]();
    }
    AuthService.prototype.fazerLogin = function (usuario) {
        var _this = this;
        var email = usuario.email, senha = usuario.senha;
        var bodyString = JSON.stringify({ email: email, senha: senha });
        return this.http.post(this.url, bodyString)
            .map(function (res) {
            _this.usuario = res.json();
            localStorage.setItem('user', JSON.stringify(_this.usuario));
            _this.mostrarMenuEmitter.emit(true);
        })
            .catch(function (error) {
            _this.mostrarMenuEmitter.emit(false);
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].throw(error);
        });
    };
    AuthService.prototype.usuarioEstaAutenticado = function () {
        var user = localStorage.getItem('user');
        if (!user) {
            return false;
        }
        return true;
    };
    AuthService.prototype.isAdmin = function () {
        var user = localStorage.getItem('user');
        if (!user) {
            return false;
        }
        return JSON.parse(user).admin;
    };
    AuthService.prototype.idDoUsuarioLogado = function () {
        return this.usuario._id.toString();
    };
    AuthService.prototype.restaurarSessaoUsuario = function () {
        this.usuario = JSON.parse(localStorage.getItem('user'));
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('user');
        this.mostrarMenuEmitter.emit(false);
        this.router.navigate(['/']);
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */]) === 'function' && _b) || Object])
    ], AuthService);
    return AuthService;
    var _a, _b;
}());
//# sourceMappingURL=/Users/thiagodorneles/Projects/jussamara/ProjetoTrocas/src/auth.service.js.map

/***/ }),

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_usuarios_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlterarSenhaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlterarSenhaComponent = (function () {
    function AlterarSenhaComponent(usuariosService, rota, router) {
        this.usuariosService = usuariosService;
        this.rota = rota;
        this.router = router;
        this.titulo = "Alterar senha";
        this.tokenInvalido = false;
        this.token = '';
        this.senha = '';
    }
    AlterarSenhaComponent.prototype.ngOnInit = function () {
        this.token = this.rota.snapshot.queryParams['token'];
        if (!this.token) {
            this.tokenInvalido = true;
            return;
        }
    };
    AlterarSenhaComponent.prototype.alterarSenha = function () {
        var _this = this;
        this.usuariosService.alterarSenha(this.token, this.senha).subscribe(function (data) {
            alert('Senha alterada com sucesso!');
            _this.router.navigate(['/login']);
        }, function (error) {
            if (error.status == 404) {
                alert('Token invalido');
            }
            else {
                alert('Ocorreu um erro. Tente novamente mais tarde');
            }
            console.error(error);
        });
    };
    AlterarSenhaComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-alterar-senha',
            template: __webpack_require__(851),
            styles: [__webpack_require__(839)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_usuarios_service__["a" /* UsuariosService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_usuarios_service__["a" /* UsuariosService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], AlterarSenhaComponent);
    return AlterarSenhaComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/thiagodorneles/Projects/jussamara/ProjetoTrocas/src/alterar-senha.component.js.map

/***/ }),

/***/ 668:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_produto__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_trocas_service__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_crud_produtos_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_login_form_auth_service__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnuncioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AnuncioComponent = (function () {
    function AnuncioComponent(servico, produtoServico, authService, rota, router) {
        this.servico = servico;
        this.produtoServico = produtoServico;
        this.authService = authService;
        this.rota = rota;
        this.router = router;
        this.produto = new __WEBPACK_IMPORTED_MODULE_1_app_produto__["a" /* Produto */];
        this.titulo = 'Anuncio';
        this.usuarioLogado = false;
        this.usuarioId = '';
        this.trocaSolicitada = false;
    }
    AnuncioComponent.prototype.ngOnInit = function () {
        this.codigo = this.rota.snapshot.params['id'];
        this.usuarioLogado = this.authService.usuarioEstaAutenticado();
        if (this.usuarioLogado) {
            this.usuarioId = this.authService.idDoUsuarioLogado();
        }
        this.buscaProduto();
    };
    AnuncioComponent.prototype.buscaProduto = function () {
        var _this = this;
        this.produtoServico.getProdutoUrl(this.codigo).subscribe(function (data) {
            _this.trocaSolicitada = data['trocaSolicitada'];
            _this.produto = data;
        }, function (error) { return _this.msgErro = error; });
    };
    AnuncioComponent.prototype.solicitarTroca = function () {
        var _this = this;
        var solicitanteid = this.authService.idDoUsuarioLogado();
        this.servico.trocarProduto(solicitanteid, this.produto).subscribe(function (data) {
            alert('solicitacao efetuada');
            _this.router.navigate(['/trocas']);
        }, function (error) { return alert('erro na troca'); });
    };
    AnuncioComponent.prototype.cancelarTroca = function () {
        var _this = this;
        this.servico.cancelarTroca(this.produto).subscribe(function (data) {
            alert('cancelamento efetuada');
            _this.router.navigate(['/']);
        }, function (error) { return alert('erro na troca'); });
    };
    AnuncioComponent.prototype.removerTroca = function () {
        var _this = this;
        this.produtoServico.removerProduto(this.produto).subscribe(function (data) {
            alert('produto para troca removido');
            _this.router.navigate(['/lista']);
        }, function (error) { return alert('erro na troca'); });
    };
    AnuncioComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-anuncio',
            template: __webpack_require__(852),
            styles: [__webpack_require__(840)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_trocas_service__["a" /* TrocasService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_app_trocas_service__["a" /* TrocasService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_app_crud_produtos_service__["a" /* CrudProdutosService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_app_crud_produtos_service__["a" /* CrudProdutosService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_app_login_form_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_app_login_form_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _e) || Object])
    ], AnuncioComponent);
    return AnuncioComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/thiagodorneles/Projects/jussamara/ProjetoTrocas/src/anuncio.component.js.map

/***/ }),

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_login_form_auth_service__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'Troca Móveis';
        this.mostrarMenu = false;
        this.isAdmin = false;
        this.usuarioId = '';
        var autenticado = this.authService.usuarioEstaAutenticado();
        if (autenticado) {
            this.mostrarMenu = autenticado;
            this.authService.restaurarSessaoUsuario();
            this.isAdmin = this.authService.isAdmin();
            this.usuarioId = this.authService.idDoUsuarioLogado();
        }
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.mostrarMenuEmitter.subscribe(function (mostrar) {
            _this.mostrarMenu = mostrar;
            _this.usuarioId = _this.authService.idDoUsuarioLogado();
            _this.isAdmin = _this.authService.isAdmin();
        });
    };
    AppComponent.prototype.deslogarUsuario = function () {
        this.authService.logout();
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(853),
            styles: [__webpack_require__(841)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_login_form_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_login_form_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/Users/thiagodorneles/Projects/jussamara/ProjetoTrocas/src/app.component.js.map

/***/ }),

/***/ 670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_crud_produtos_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__http_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_login_form_auth_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guarda_auth_guard_service__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_trocas_service__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_usuarios_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__trocas_trocas_component__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__anuncio_anuncio_component__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__tabela_produtos_tabela_produtos_component__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__form_produtos_form_produtos_component__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__inicio_inicio_component__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__login_form_login_form_component__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__usuario_tabela_usuario_tabela_component__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__usuario_form_usuario_form_component__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__usuario_perfil_usuario_perfil_component__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__recuperar_senha_form_recuperar_senha_form_component__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__alterar_senha_alterar_senha_component__ = __webpack_require__(667);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
var routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'lista', component: __WEBPACK_IMPORTED_MODULE_14__tabela_produtos_tabela_produtos_component__["a" /* TabelaProdutosComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__guarda_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'edicao/:cod', component: __WEBPACK_IMPORTED_MODULE_15__form_produtos_form_produtos_component__["a" /* FormProdutosComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__guarda_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'novo', component: __WEBPACK_IMPORTED_MODULE_15__form_produtos_form_produtos_component__["a" /* FormProdutosComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__guarda_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'inicio', component: __WEBPACK_IMPORTED_MODULE_16__inicio_inicio_component__["a" /* InicioComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_17__login_form_login_form_component__["a" /* LoginFormComponent */] },
    { path: 'usuario/lista', component: __WEBPACK_IMPORTED_MODULE_18__usuario_tabela_usuario_tabela_component__["a" /* UsuarioTabelaComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__guarda_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'usuario/novo', component: __WEBPACK_IMPORTED_MODULE_19__usuario_form_usuario_form_component__["a" /* UsuarioFormComponent */] },
    { path: 'usuario/recuperar-senha', component: __WEBPACK_IMPORTED_MODULE_21__recuperar_senha_form_recuperar_senha_form_component__["a" /* RecuperarSenhaFormComponent */] },
    { path: 'usuario/alterar-senha', component: __WEBPACK_IMPORTED_MODULE_22__alterar_senha_alterar_senha_component__["a" /* AlterarSenhaComponent */] },
    { path: 'usuario/:id', component: __WEBPACK_IMPORTED_MODULE_20__usuario_perfil_usuario_perfil_component__["a" /* UsuarioPerfilComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__guarda_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'usuario/:id/editar', component: __WEBPACK_IMPORTED_MODULE_19__usuario_form_usuario_form_component__["a" /* UsuarioFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__guarda_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'trocas', component: __WEBPACK_IMPORTED_MODULE_12__trocas_trocas_component__["a" /* TrocasComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__guarda_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'anuncio/:id', component: __WEBPACK_IMPORTED_MODULE_13__anuncio_anuncio_component__["a" /* AnuncioComponent */] },
    { path: "*", redirectTo: 'inicio' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__tabela_produtos_tabela_produtos_component__["a" /* TabelaProdutosComponent */],
                __WEBPACK_IMPORTED_MODULE_15__form_produtos_form_produtos_component__["a" /* FormProdutosComponent */],
                __WEBPACK_IMPORTED_MODULE_16__inicio_inicio_component__["a" /* InicioComponent */],
                __WEBPACK_IMPORTED_MODULE_17__login_form_login_form_component__["a" /* LoginFormComponent */],
                __WEBPACK_IMPORTED_MODULE_20__usuario_perfil_usuario_perfil_component__["a" /* UsuarioPerfilComponent */],
                __WEBPACK_IMPORTED_MODULE_18__usuario_tabela_usuario_tabela_component__["a" /* UsuarioTabelaComponent */],
                __WEBPACK_IMPORTED_MODULE_19__usuario_form_usuario_form_component__["a" /* UsuarioFormComponent */],
                __WEBPACK_IMPORTED_MODULE_21__recuperar_senha_form_recuperar_senha_form_component__["a" /* RecuperarSenhaFormComponent */],
                __WEBPACK_IMPORTED_MODULE_22__alterar_senha_alterar_senha_component__["a" /* AlterarSenhaComponent */],
                __WEBPACK_IMPORTED_MODULE_12__trocas_trocas_component__["a" /* TrocasComponent */],
                __WEBPACK_IMPORTED_MODULE_13__anuncio_anuncio_component__["a" /* AnuncioComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(routes)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__http_service__["a" /* HttpService */],
                // {
                //   provide: HttpService,
                //   useFactory: (backend: XHRBackend, options: RequestOptions) => {
                //     return new HttpService(backend, options);
                //   },
                //   deps: [XHRBackend, RequestOptions]
                // },
                __WEBPACK_IMPORTED_MODULE_5_app_crud_produtos_service__["a" /* CrudProdutosService */],
                __WEBPACK_IMPORTED_MODULE_11_app_usuarios_service__["a" /* UsuariosService */],
                __WEBPACK_IMPORTED_MODULE_8_app_login_form_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_9__guarda_auth_guard_service__["a" /* AuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_10_app_trocas_service__["a" /* TrocasService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/thiagodorneles/Projects/jussamara/ProjetoTrocas/src/app.module.js.map

/***/ }),

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_crud_produtos_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_produto__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_login_form_auth_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormProdutosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FormProdutosComponent = (function () {
    function FormProdutosComponent(servico, authService, router, rota) {
        this.servico = servico;
        this.authService = authService;
        this.router = router;
        this.rota = rota;
        this.titulo = 'Cadastro de Trocas';
        this.produto = new __WEBPACK_IMPORTED_MODULE_2_app_produto__["a" /* Produto */];
    }
    FormProdutosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._id = this.rota.snapshot.params['cod'];
        setTimeout(function () { Materialize.updateTextFields(); }, 100);
        if (this._id) {
            this.servico.getProdutoUrl(this._id).subscribe(function (data) {
                _this.produto = data;
                // setTimeout(() => { Materialize.updateTextFields(); }, 100);
            }, function (error) { return _this.msgErro = error; });
        }
    };
    FormProdutosComponent.prototype.salvarProduto = function () {
        var _this = this;
        if (!this._id) {
            this.produto.dono = this.authService.idDoUsuarioLogado();
            this.servico.adiciconarProduto(this.produto).subscribe(function (produto) { return _this.router.navigate(['/lista']); }, function (error) { return _this.msgErro = error; });
            alert("Troca " + this.produto.nome + " adicionado com sucesso!");
            this.produto = new __WEBPACK_IMPORTED_MODULE_2_app_produto__["a" /* Produto */]();
        }
        else {
            this.servico.atualizaProduto(this._id, this.produto).subscribe(function (data) { return _this.router.navigate(['/lista']); });
            (function (error) { return _this.msgErro = error; });
            alert("Móvel " + this.produto.nome + " editado com sucesso!");
        }
    };
    FormProdutosComponent.prototype.voltar = function () {
        this.router.navigate(['/lista']);
    };
    FormProdutosComponent.prototype.selecionaImagem = function ($event) {
        this.lerConteudoImagem($event.target);
    };
    FormProdutosComponent.prototype.lerConteudoImagem = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.produto.image = myReader.result;
        };
        myReader.readAsDataURL(file);
    };
    FormProdutosComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-form-produtos',
            template: __webpack_require__(854),
            styles: [__webpack_require__(842)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_crud_produtos_service__["a" /* CrudProdutosService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_crud_produtos_service__["a" /* CrudProdutosService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_login_form_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_app_login_form_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === 'function' && _d) || Object])
    ], FormProdutosComponent);
    return FormProdutosComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/thiagodorneles/Projects/jussamara/ProjetoTrocas/src/form-produtos.component.js.map

/***/ }),

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_form_auth_service__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (router, state) {
        if (this.authService.usuarioEstaAutenticado()) {
            return true;
        }
        // this.router.navigate(['/login-form']);        
        this.router.navigate(['/login'], {
            queryParams: {
                returnUrl: state.url
            }
        });
        return false;
    };
    AuthGuardService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__login_form_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__login_form_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuardService);
    return AuthGuardService;
    var _a, _b;
}());
//# sourceMappingURL=/Users/thiagodorneles/Projects/jussamara/ProjetoTrocas/src/auth-guard.service.js.map

/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_crud_produtos_service__ = __webpack_require__(120);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InicioComponent = (function () {
    function InicioComponent(servico) {
        this.servico = servico;
        this.titulo = "Troca Móveis, renovando o seu ambiente!";
        this.produtos = [];
    }
    InicioComponent.prototype.ngOnInit = function () {
        this.carregarProdutos();
    };
    InicioComponent.prototype.carregarProdutos = function () {
        var _this = this;
        this.servico.getProdutos().subscribe(function (data) { return _this.produtos = data; }, function (error) { return _this.msgErro = error; });
    };
    InicioComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-inicio',
            template: __webpack_require__(855),
            styles: [__webpack_require__(843)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_crud_produtos_service__["a" /* CrudProdutosService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_crud_produtos_service__["a" /* CrudProdutosService */]) === 'function' && _a) || Object])
    ], InicioComponent);
    return InicioComponent;
    var _a;
}());
//# sourceMappingURL=/Users/thiagodorneles/Projects/jussamara/ProjetoTrocas/src/inicio.component.js.map

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_usuario__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_login_form_auth_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginFormComponent = (function () {
    function LoginFormComponent(authService, route, router) {
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.titulo = "Faça seu Login";
        this.usuario = new __WEBPACK_IMPORTED_MODULE_1_app_usuario__["a" /* Usuario */]();
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginFormComponent.prototype.fazerLogin = function () {
        var _this = this;
        this.authService.fazerLogin(this.usuario).subscribe(function (data) { return _this.router.navigate([_this.returnUrl]); }, function (error) { return alert('Senha ou usuário inválidos!'); });
    };
    LoginFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-login-form',
            template: __webpack_require__(856),
            styles: [__webpack_require__(844)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_login_form_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_login_form_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], LoginFormComponent);
    return LoginFormComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/thiagodorneles/Projects/jussamara/ProjetoTrocas/src/login-form.component.js.map

/***/ }),

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_usuarios_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecuperarSenhaFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecuperarSenhaFormComponent = (function () {
    function RecuperarSenhaFormComponent(usuariosService, route, router) {
        this.usuariosService = usuariosService;
        this.route = route;
        this.router = router;
        this.titulo = "Recuperar senha";
        this.email = '';
    }
    RecuperarSenhaFormComponent.prototype.recuperarSenha = function () {
        this.usuariosService.recuperarSenha(this.email).subscribe(function (data) { return alert('Enviado um e-mail para gerar nova senha'); }, function (error) {
            alert('Ocorreu um erro. Tente novamente mais tarde');
            console.error(error);
        });
    };
    RecuperarSenhaFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-recuperar-senha-form',
            template: __webpack_require__(857),
            styles: [__webpack_require__(845)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_usuarios_service__["a" /* UsuariosService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_usuarios_service__["a" /* UsuariosService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], RecuperarSenhaFormComponent);
    return RecuperarSenhaFormComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/thiagodorneles/Projects/jussamara/ProjetoTrocas/src/recuperar-senha-form.component.js.map

/***/ }),

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_crud_produtos_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_usuarios_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_login_form_auth_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabelaProdutosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabelaProdutosComponent = (function () {
    function TabelaProdutosComponent(servico, usuarioService, authService, rota) {
        this.servico = servico;
        this.usuarioService = usuarioService;
        this.authService = authService;
        this.rota = rota;
        this.titulo = 'Tabela de Móveis';
        this.produtos = [];
    }
    TabelaProdutosComponent.prototype.ngOnInit = function () {
        this.carregarProdutos();
    };
    TabelaProdutosComponent.prototype.carregarProdutos = function () {
        var _this = this;
        var usuarioId = this.authService.idDoUsuarioLogado();
        this.usuarioService.getProdutosDoUsuario(usuarioId).subscribe(function (data) { return _this.produtos = data; }, function (error) { return _this.msgErro = error; });
    };
    TabelaProdutosComponent.prototype.remover = function (produto) {
        var _this = this;
        this.servico.removerProduto(produto).subscribe(function (data) { return _this.carregarProdutos(); }, function (error) { return _this.msgErro = error; });
    };
    TabelaProdutosComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-tabela-produtos',
            template: __webpack_require__(858),
            styles: [__webpack_require__(846)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_crud_produtos_service__["a" /* CrudProdutosService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_crud_produtos_service__["a" /* CrudProdutosService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_usuarios_service__["a" /* UsuariosService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_usuarios_service__["a" /* UsuariosService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_login_form_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_app_login_form_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === 'function' && _d) || Object])
    ], TabelaProdutosComponent);
    return TabelaProdutosComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/thiagodorneles/Projects/jussamara/ProjetoTrocas/src/tabela-produtos.component.js.map

/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trocas_service__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_form_auth_service__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrocasComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrocasComponent = (function () {
    function TrocasComponent(trocasService, authService) {
        this.trocasService = trocasService;
        this.authService = authService;
        this.solicitadas = [];
        this.recebidas = [];
    }
    TrocasComponent.prototype.ngOnInit = function () {
        var _this = this;
        var usuarioId = this.authService.idDoUsuarioLogado();
        this.trocasService.solicitadas(usuarioId).subscribe(function (data) { return _this.solicitadas = data; }, function (error) { return console.error(error); });
        this.trocasService.recebidas(usuarioId).subscribe(function (data) { return _this.recebidas = data; }, function (error) { return console.error(error); });
    };
    TrocasComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-trocas',
            template: __webpack_require__(859),
            styles: [__webpack_require__(847)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__trocas_service__["a" /* TrocasService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__trocas_service__["a" /* TrocasService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__login_form_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__login_form_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], TrocasComponent);
    return TrocasComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/thiagodorneles/Projects/jussamara/ProjetoTrocas/src/trocas.component.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_usuario__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_usuarios_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsuarioFormComponent = (function () {
    function UsuarioFormComponent(servico, router, rota) {
        this.servico = servico;
        this.router = router;
        this.rota = rota;
        this.titulo = "Cadastro de Usuários";
        this.usuario = new __WEBPACK_IMPORTED_MODULE_1_app_usuario__["a" /* Usuario */]();
    }
    UsuarioFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.rota.snapshot.params['id'];
        if (!this.id) {
            this.usuario = new __WEBPACK_IMPORTED_MODULE_1_app_usuario__["a" /* Usuario */]();
        }
        else {
            this.servico.getUsuarioUrl(this.id).subscribe(function (data) {
                _this.usuario = data;
                setTimeout(function () { Materialize.updateTextFields(); }, 100);
            }, function (error) {
                if (error.status === 401) {
                    _this.router.navigate(['/']);
                }
            });
        }
    };
    UsuarioFormComponent.prototype.salvarUsuario = function () {
        var _this = this;
        if (!this.id) {
            this.servico.adicionaUsuario(this.usuario).subscribe(function (usuario) { return _this.router.navigate(['/usuario/lista']); }, function (error) { return _this.erro = error; });
            alert("Usuario " + this.usuario.name + " adicionado com sucesso!");
        }
        else {
            this.servico.atualizarUsuario(this.id, this.usuario).subscribe(function (data) { return _this.router.navigate(['/usuario/lista']); });
            (function (error) { return _this.erro = error; });
            alert("Usuario " + this.usuario.name + " editado com sucesso!");
        }
        //this.router.navigate(['/usuario/lista']);
    };
    UsuarioFormComponent.prototype.voltar = function () {
        this.router.navigate(['/usuario/lista']);
    };
    UsuarioFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-usuario-form',
            template: __webpack_require__(860),
            styles: [__webpack_require__(848)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_usuarios_service__["a" /* UsuariosService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_usuarios_service__["a" /* UsuariosService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], UsuarioFormComponent);
    return UsuarioFormComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/thiagodorneles/Projects/jussamara/ProjetoTrocas/src/usuario-form.component.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_usuario__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_usuarios_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioPerfilComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsuarioPerfilComponent = (function () {
    function UsuarioPerfilComponent(usuarioService, router, rota) {
        this.usuarioService = usuarioService;
        this.router = router;
        this.rota = rota;
        this.titulo = "Cadastro de Usuários";
        this.id = '';
        this.usuario = new __WEBPACK_IMPORTED_MODULE_1_app_usuario__["a" /* Usuario */]();
        this.produtos = [];
    }
    UsuarioPerfilComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.rota.snapshot.params['id'];
        this.usuarioService.perfilUsuario(this.id).subscribe(function (data) {
            _this.usuario = data;
            _this.carregarProdutos();
        }, function (error) {
            _this.erro = error;
        });
    };
    UsuarioPerfilComponent.prototype.carregarProdutos = function () {
        var _this = this;
        this.usuarioService.getProdutosDoUsuario(this.id).subscribe(function (data) { return _this.produtos = data; }, function (error) { return console.error(error); });
    };
    UsuarioPerfilComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-usuario-perfil',
            template: __webpack_require__(861),
            styles: [__webpack_require__(849)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_usuarios_service__["a" /* UsuariosService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_usuarios_service__["a" /* UsuariosService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], UsuarioPerfilComponent);
    return UsuarioPerfilComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/thiagodorneles/Projects/jussamara/ProjetoTrocas/src/usuario-perfil.component.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_usuarios_service__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioTabelaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsuarioTabelaComponent = (function () {
    function UsuarioTabelaComponent(servico) {
        this.servico = servico;
        this.titulo = "Tabela de Usuarios";
    }
    UsuarioTabelaComponent.prototype.ngOnInit = function () {
        this.carregarLista();
    };
    UsuarioTabelaComponent.prototype.carregarLista = function () {
        var _this = this;
        this.servico.getListaUsuarios().subscribe(function (data) { return _this.usuarios = data; }, function (error) { return _this.erro = error; });
    };
    UsuarioTabelaComponent.prototype.excluirUsuario = function (usuario) {
        var _this = this;
        this.servico.excluirUsuario(usuario).subscribe(function (data) { return _this.carregarLista(); }, function (error) { return _this.erro = error; });
    };
    UsuarioTabelaComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-usuario-tabela',
            template: __webpack_require__(862),
            styles: [__webpack_require__(850)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_usuarios_service__["a" /* UsuariosService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_usuarios_service__["a" /* UsuariosService */]) === 'function' && _a) || Object])
    ], UsuarioTabelaComponent);
    return UsuarioTabelaComponent;
    var _a;
}());
//# sourceMappingURL=/Users/thiagodorneles/Projects/jussamara/ProjetoTrocas/src/usuario-tabela.component.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/thiagodorneles/Projects/jussamara/ProjetoTrocas/src/environment.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuariosService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UsuariosService = (function () {
    function UsuariosService(http) {
        this.http = http;
        this.url = "/users/";
        this.usuarios = [];
    }
    UsuariosService.prototype.getListaUsuarios = function () {
        return this.http.get(this.url)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error); });
    };
    UsuariosService.prototype.adicionaUsuario = function (usuario) {
        var bodyString = JSON.stringify(usuario);
        return this.http.post(this.url, bodyString)
            .map(function (res) { })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error); });
    };
    UsuariosService.prototype.getUsuarioUrl = function (id) {
        var url = this.url + id;
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error); });
    };
    UsuariosService.prototype.perfilUsuario = function (id) {
        return this.http.get(this.url + "perfil/" + id)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error); });
    };
    UsuariosService.prototype.excluirUsuario = function (usuario) {
        var url = this.url + usuario._id;
        return this.http.delete(url)
            .map(function (res) { })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error); });
    };
    UsuariosService.prototype.atualizarUsuario = function (id, usuario) {
        var url = this.url + id;
        var bodyString = JSON.stringify(usuario);
        return this.http.put(url, bodyString)
            .map(function (res) { })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error); });
    };
    UsuariosService.prototype.getProdutosDoUsuario = function (usuarioId) {
        return this.http.get("" + this.url + usuarioId + "/moveis")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error); });
    };
    UsuariosService.prototype.recuperarSenha = function (email) {
        var body = { email: email };
        var bodyString = JSON.stringify(body);
        return this.http.post(this.url + "recuperar-senha", bodyString)
            .map(function (res) { return true; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error); });
    };
    UsuariosService.prototype.alterarSenha = function (token, senha) {
        var body = { token: token, senha: senha };
        var bodyString = JSON.stringify(body);
        return this.http.post(this.url + "alterar-senha", bodyString)
            .map(function (res) { return true; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error); });
    };
    UsuariosService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === 'function' && _a) || Object])
    ], UsuariosService);
    return UsuariosService;
    var _a;
}());
//# sourceMappingURL=/Users/thiagodorneles/Projects/jussamara/ProjetoTrocas/src/usuarios.service.js.map

/***/ }),

/***/ 839:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 840:
/***/ (function(module, exports) {

module.exports = ".card-image {\n  max-width: 250px;\n}\n\n.card-image img {\n  max-width: 100%;\n}\n"

/***/ }),

/***/ 841:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 842:
/***/ (function(module, exports) {

module.exports = "input[type=text], select {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n}\n\ninput[type=submit] {\n    width: 100%;\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n}\ninput[type=submit]:hover {\n    background-color: #B8B8B8;\n}\n.buttons{\n    text-align: center;\n    display:  block;\n    width: 80%;\n    margin: auto;\n}\n\n.form {\n    border-radius: 8px;\n    background-color: #f2f2f2;\n    padding: 20px;\n}"

/***/ }),

/***/ 843:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 844:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 845:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 846:
/***/ (function(module, exports) {

module.exports = "table{\n    font-family: Arial,  sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n}\n\ntd, th {\n    border: 1px solid #f2f2f2;\n    text-align: left;\n    padding: 8px;\n}\n\ntr:nth-child(even){\n    background-color: #f2f2f2;\n}"

/***/ }),

/***/ 847:
/***/ (function(module, exports) {

module.exports = "table{\n  font-family: Arial,  sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n\ntd, th {\n  border: 1px solid #f2f2f2;\n  text-align: left;\n  padding: 8px;\n}\n\ntr:nth-child(even){\n  background-color: #f2f2f2;\n}\n"

/***/ }),

/***/ 848:
/***/ (function(module, exports) {

module.exports = ".form {\n  border-radius: 8px;\n  background-color: #f2f2f2;\n  padding: 20px;\n}\n"

/***/ }),

/***/ 849:
/***/ (function(module, exports) {

module.exports = ".form {\n  border-radius: 8px;\n  background-color: #f2f2f2;\n  padding: 20px;\n}\n"

/***/ }),

/***/ 850:
/***/ (function(module, exports) {

module.exports = "table{\n    font-family: Arial,  sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n}\n\ntd, th {\n    border: 1px solid #f2f2f2;\n    text-align: left;\n    padding: 8px;\n}\n\ntr:nth-child(even){\n    background-color: #f2f2f2;\n}"

/***/ }),

/***/ 851:
/***/ (function(module, exports) {

module.exports = "<div class=container>\n  <h4>{{titulo}}</h4>\n  <div *ngIf=\"tokenInvalido\">\n    URL inválida\n    <br>\n    Volte para a página inicial <a [routerLink]=\"['/']\">aqui</a>\n  </div>\n  <form class=\"form\" name=\"alterarSenhaForm\" (ngSubmit)=\"alterarSenha()\" *ngIf=\"!tokenInvalido\">\n    Digite uma nova senha\n    <div class=\"row\">\n      <div class=\"input-field col s6\">\n        <input [(ngModel)]=\"senha\" id=\"senha\" name=\"senha\" type=\"text\" class=\"validate\">\n        <label class=\"active\" for=\"senha\">Senha</label>\n      </div>\n    </div>\n    <button class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\">Alterar senha</button>\n  </form>\n</div>\n"

/***/ }),

/***/ 852:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h3>{{produto.nome}}</h3>\n\n    <div class=\"row\">\n      <div class=\"card blue-grey darken-1\">\n          <div class=\"card-content white-text\">\n            <div class=\"card-image waves-effect waves-block waves-light\">\n              <img class=\"activator\" [src]=\"produto.image\" />\n            </div>\n            <p>{{produto.descricao}}</p>\n            <hr>\n            <p>{{produto.endereco.cidade}} - {{produto.endereco.estado}}</p>\n            <hr>\n            <p>Veja mais itens desse usuário: <a [routerLink]=\"['/usuario/', produto.dono]\">aqui</a></p>\n          </div>\n          <div *ngIf=\"usuarioLogado && produto.dono !== usuarioId\" class=\"card-action\">\n            <a *ngIf=\"!trocaSolicitada\" (click)=\"solicitarTroca()\">Solicitar</a>\n            <a *ngIf=\"trocaSolicitada\" (click)=\"cancelarTroca()\">Cancelar</a>\n          </div>\n          <div *ngIf=\"usuarioLogado && produto.dono === usuarioId\" class=\"card-action\">\n            <a (click)=\"removerTroca()\">Remover produto</a>\n          </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 853:
/***/ (function(module, exports) {

module.exports = "<nav>\n    <div class=\"nav-wrapper\">\n        <div class=\"nav-wrapper grey\">\n            <a class=\"brand-logo\" style=\"left:50px;\">TrocaMoveis</a>\n            <a data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\n            <ul class=\"right hide-on-med-and-down\">\n                <li routerLinkActive=\"active\"><a routerLink=\"/inicio\">Página Inicial</a></li>\n                <li *ngIf=\"mostrarMenu\" routerLinkActive=\"active\"><a routerLink=\"/trocas\">Trocas</a></li>\n                <li *ngIf=\"mostrarMenu\" routerLinkActive=\"active\"><a routerLink=\"/novo\">Cadastrar Móvel</a></li>\n                <li *ngIf=\"mostrarMenu\"routerLinkActive=\"active\"><a routerLink=\"/lista\">Lista de Móveis</a></li>\n                <li *ngIf=\"mostrarMenu && isAdmin\" routerLinkActive=\"active\"><a routerLink=\"/usuario/lista\">Lista de Usuários</a></li>\n                <li *ngIf=\"mostrarMenu\" routerLinkActive=\"active\"><a [routerLink]=\"['/usuario', usuarioId, 'editar']\">Meu perfil</a></li>\n                <li *ngIf=\"mostrarMenu\" routerLinkActive=\"active\"><a (click)=\"deslogarUsuario()\">Logout</a></li>\n                <li *ngIf=\"!mostrarMenu\" routerLinkActive=\"active\"><a routerLink=\"/login\">Entrar</a></li>\n            </ul>\n            <ul class=\"side-nav\" id=\"mobile-demo\">\n                <li><a>Página Inicial</a></li>\n                <li><a>Trocas</a></li>\n                <li><a>Cadastrar Trocas</a></li>\n                <li><a>Lista de Trocas</a></li>\n                <li><a>Lista de Usuários</a></li>\n                <li><a>Cadastrar-se</a></li>\n                <li><a>Login</a></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n<div>\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 854:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>{{titulo}}</h3>\n  <div class=\"form\">\n    <form *ngIf='produto'>\n      <div class=\"row\">\n        <div class=\"col s6\">\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" id=\"nome\" name=\"nome\" placeholder=\"nome do movel \" [(ngModel)]=\"produto.nome\">\n              <label class=\"active\" for=\"nome\">Nome</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" id=\"descricao\" name=\"descricao\" placeholder=\"Descreva o móvel, medidas, cor, material\" [(ngModel)]=\"produto.descricao\">\n              <label for=\"descricao\">Descrição</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" id=\"Estado\" name=\"Estado\" placeholder=\"Escreva seu Estado\" [(ngModel)]=\"produto.endereco.estado\">\n              <label for=\"Estado\">Estado</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" id=\"Cidade\" name=\"Cidade\" placeholder=\"Escreva sua Cidade\" [(ngModel)]=\"produto.endereco.cidade\">\n              <label for=\"Cidade\">Cidade</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"file-field input-field col s12\">\n              <div class=\"btn\">\n                <span>Imagem</span>\n                <input type=\"file\" name=\"image\" id=\"image\" accept=\"image/*\" (change)=\"selecionaImagem($event)\" />\n              </div>\n              <div class=\"file-path-wrapper\">\n                <input class=\"file-path validate\" type=\"text\" />\n              </div>\n            </div>\n          </div>\n\n        </div>\n        <div class=\"col s6\">\n          <div class=\"row\">\n            <div class=\"col s12\">\n              <p>Preview da imagem:</p>\n              <img *ngIf=\"produto.image\" [src]=\"produto.image\" style=\"width: 100%;\" />\n            </div>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"divider\"></div>\n      <input type=\"button\" class=\"btn\" (click)=\"salvarProduto()\" value=\"Salvar\" />\n      <input type=\"button\" class=\"btn btn-flat\" (click)=\"voltar()\" value=\"Cancelar\" />\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ 855:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h4>Troca Móveis - Cadastre-se e troque seu móvel.</h4>\n</div>\n\n<div class=\"carousel carousel-slider center\" data-indicators=\"true\">\n\n  <div class=\"carousel-item red black-text\" href=\"#one!\" style=\"background:url(/fotosG/mesaMadeira.jpg)\">\n    <h2></h2>\n    <p class=\"Black-text\"></p>\n  </div>\n  <div class=\"carousel-item amber white-text\" href=\"#two!\" style=\"background:url(/fotosG/CamacomVista.jpg)\">\n    <h2></h2>\n    <p class=\"white-text\"></p>\n  </div>\n  <div class=\"carousel-item green white-text\" href=\"#three!\" style=\"background:url(/fotosG/sofaLoft.png)\">\n    <h2></h2>\n    <p class=\"white-text\"></p>\n  </div>\n  <div class=\"carousel-item blue white-text\" href=\"#four!\" style=\"background:url(/fotosG/mesinha.jpg)\">\n    <h2></h2>\n    <p class=\"white-text\"></p>\n  </div>\n</div>\n\n\n<!-- -->\n\n<!-- cards-->\n\n<div class=\"row\">\n  <div class=\"col s4 m3\" *ngFor=\"let produto of produtos; let cod = produto\">\n    <div class=\"card blue-grey darken-1\">\n      <div class=\"card-content white-text\">\n        <span class=\"card-title\">{{produto.nome}}</span>\n        <div class=\"card-image waves-effect waves-block waves-light\">\n          <img class=\"activator\" [src]=\"produto.image\" />\n        </div>\n        <p>{{produto.descricao}}</p>\n      </div>\n      <div class=\"card-action\">\n        <a [routerLink]=\"['/anuncio', produto._id]\">Detalhes</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<!-- footer  -->\n\n<footer class=\"page-footer grey darken-4\">\n\n  <div class=\"page-footer grey darken-4\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col l4 s10\">\n          <h5 class=\"white-text\">Espaço par anúncios</h5>\n          <p class=\"grey-text text-lighten-4\">Aqui o anunciante pode seixar seu logo, para linkar com o sue site.</p>\n        </div>\n        <div class=\"col l4 offset-l2 s12\">\n          <h5 class=\"white-text\">Patrocínio</h5>\n          <ul>\n            <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Cassol</a></li>\n            <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Cimafer</a></li>\n            <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Casamia</a></li>\n            <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Florence</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"footer-copyright\">\n      <div class=\"container\">\n        © 2017 Copyright Text\n        <a class=\"grey-text text-lighten-4 right\" href=\"#!\">Contato</a>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ 856:
/***/ (function(module, exports) {

module.exports = "<div class=container>\n  <h4>{{titulo}}</h4>\n  <form class=\"form\" name=\"loginForm\" *ngIf='usuario' (ngSubmit)=\"fazerLogin()\">\n    <div class=\"row\">\n      <div class=\"input-field col s6\">\n        <input [(ngModel)]=\"usuario.email\" id=\"usuario\" name=\"usuario\" type=\"text\" class=\"validate\">\n        <label [ngClass]=\"'active'\" for=\"usuario\">Email</label>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"input-field col s6\">\n        <input [(ngModel)]=\"usuario.senha\" id=\"senha\" name=\"senha\" type=\"password\" class=\"validate\">\n        <label class=\"active\" for=\"senha\">Senha</label>\n      </div>\n    </div>\n    <button class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\" (click)=\"fazerLogin()\">Login</button>\n    <a class=\"btn btn-flat\" [routerLink]=\"['/usuario/novo']\">Cadastrar-se</a>\n    <a class=\"btn btn-flat\" [routerLink]=\"['/usuario/recuperar-senha']\">Recuperar senha</a>\n  </form>\n</div>\n"

/***/ }),

/***/ 857:
/***/ (function(module, exports) {

module.exports = "<div class=container>\n  <h4>{{titulo}}</h4>\n  <form class=\"form\" name=\"recuperarSenhaForm\" (ngSubmit)=\"recuperarSenha()\">\n    <div class=\"row\">\n      <div class=\"input-field col s6\">\n        <input [(ngModel)]=\"email\" id=\"email\" name=\"email\" type=\"text\" class=\"validate\">\n        <label class=\"active\" for=\"email\">Email</label>\n      </div>\n    </div>\n    <button class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\">Recuperar senha</button>\n  </form>\n</div>\n"

/***/ }),

/***/ 858:
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n  <h3>{{titulo}}</h3>\n  <table>\n    <tr>\n      <th>Nome do Movel</th>\n      <th>Descrição</th>\n      <th>Estado</th>\n      <th>Cidade</th>\n      <th>Imagem</th>\n      <th>Editar</th>\n      <th>Remover</th>\n    </tr>\n    <tr *ngFor=\"let produto of produtos; let cod = produto\">\n      <td>{{produto.nome}}</td>\n      <td>{{produto.descricao}}</td>\n      <td>{{produto.endereco.estado}}</td>\n      <td>{{produto.endereco.cidade}}</td>\n      <td>\n        <img class=\"activator\" src={{urlImagem}}>\n      </td>\n      <td><a [routerLink]=\"['/edicao', produto._id]\">Editar</a></td>\n      <td><a routerLink=\"/lista\" (click)= \"remover(produto)\">Remover</a></td>\n    </tr>\n  </table>\n\n  <h5><a routerLink=\"/novo\">Cadastra mais uma troca</a></h5>\n</div>\n"

/***/ }),

/***/ 859:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>Trocas enviadas pendentes</h3>\n  <table>\n    <tr>\n      <th>Data da solicitação</th>\n      <th>Móvel</th>\n    </tr>\n    <tr *ngFor=\"let troca of solicitadas; let cod = troca\">\n      <td>{{troca.data | date:'short'}}</td>\n      <td>\n        <a [routerLink]=\"['/anuncio/', troca.movel.id]\">{{troca.movel.nome}}</a>\n      </td>\n    </tr>\n  </table>\n  <br>\n  <br>\n  <hr>\n  <br>\n  <br>\n  <h3>Trocas recebidas pendentes</h3>\n  <table>\n      <tr>\n        <th>Data da solicitação</th>\n        <th>Móvel</th>\n        <th>Solicitante</th>\n      </tr>\n      <tr *ngFor=\"let troca of recebidas; let cod = troca\">\n        <td>{{troca.data | date:'short'}}</td>\n        <td>\n          <a [routerLink]=\"['/anuncio/', troca.movel.id]\">{{troca.movel.nome}}</a>\n        </td>\n        <td>\n          <a [routerLink]=\"['/usuario/', troca.solicitante.id]\">{{troca.solicitante.nome}}</a>\n        </td>\n      </tr>\n    </table>\n</div>\n"

/***/ }),

/***/ 860:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>{{titulo}}</h3>\n  <form class=\"form\" name=\"usuarioForm\" *ngIf='usuario'>\n    <div class=\"row\">\n      <div class=\"input-field col s6\">\n        <input type=\"text\" name=\"name\" [(ngModel)]=\"usuario.name\" required />\n        <label for=\"name\">Nome</label>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"input-field col s6\">\n        <input type=\"text\" name=\"cpf\" [(ngModel)]=\"usuario.cpf\" required />\n        <label for=\"cpf\">CPF</label>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"input-field col s6\">\n        <input type=\"password\" name=\"senha\" [(ngModel)]=\"usuario.senha\" required />\n        <label for=\"senha\">Senha</label>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"input-field col s6\">\n        <input type=\"email\" name=\"email\" [(ngModel)]=\"usuario.email\" />\n        <label for=\"email\">E-mail</label>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"input-field col s6\">\n        <input type=\"text\" name=\"telefone\" [(ngModel)]=\"usuario.telefone\">\n        <label for=\"telefone\">Telefone</label>\n      </div>\n    </div>\n    <input type=\"submit\" class=\"btn\" (click)= \"salvarUsuario()\" value = \"Cadastrar\" >\n    <input type=\"button\" class=\"btn btn-flat\" (click)=\"voltar()\" value=\"Cancelar\" />\n  </form>\n</div>\n"

/***/ }),

/***/ 861:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Perfil do usuário</h2>\n  <section class=\"section\">\n    <p>Nome: {{usuario.name}}</p>\n    <p>E-mail: {{usuario.email}}</p>\n    <p>Telefone: {{usuario.telefone}}</p>\n  </section>\n  <div class=\"divider\"></div>\n  <section class=\"section\">\n    <b>Produtos do usuário</b>\n    <div class=\"row\">\n        <div class=\"col s4 m3\" *ngFor=\"let produto of produtos; let cod = produto\">\n          <div class=\"card blue-grey darken-1\">\n            <div class=\"card-content white-text\">\n              <span class=\"card-title\">{{produto.nome}}</span>\n              <div class=\"card-image waves-effect waves-block waves-light\">\n                <img class=\"activator\" [src]=\"produto.image\" />\n              </div>\n              <p>{{produto.descricao}}</p>\n            </div>\n            <div class=\"card-action\">\n              <a [routerLink]=\"['/anuncio', produto._id]\">Detalhes</a>\n            </div>\n          </div>\n        </div>\n      </div>\n  </section>\n</div>\n"

/***/ }),

/***/ 862:
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n<h3>{{titulo}}</h3>\n<table>\n  <tr>\n    <th>Nome</th>\n    <th>Email</th>\n    <th>Telefone</th>\n    <th>Editar</th>\n    <th>Remover</th>\n  </tr>\n  <tr *ngFor=\"let usuario of usuarios;let ind=usuario\">\n    <td>{{usuario.name}}</td>\n    <td>{{usuario.email}}</td>\n    <td>{{usuario.telefone}}</td>\n    <td><a [routerLink]=\"['/usuario', usuario._id, 'editar']\">Editar</a></td>\n    <td><a [routerLink]=\"['/usuario/lista']\" (click)= \"excluirUsuario(usuario)\">Remover</a></td>\n  </tr>\n  <a routerLink=\"/usuario/novo\"> NOVO USUARIO </a>\n</table>\n</div>\n"

/***/ })

},[1144]);
//# sourceMappingURL=main.bundle.map