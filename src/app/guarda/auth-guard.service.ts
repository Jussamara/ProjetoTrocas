import {
  Injectable
} from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import {
  Observable
} from "rxjs/Observable";

import {
  AuthService
} from './../login-form/auth.service'

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable < boolean > | boolean {

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
  }
}
