import {Injectable} from '@angular/core';
import {Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers, BaseRequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService extends Http {
  constructor (backend: XHRBackend, options: RequestOptions) {
    options.headers.set('Content-Type', `application/json`);
    super(backend, options);
  }

  request(request: Request, options?: RequestOptionsArgs): Observable<Response> {
    const usuario = localStorage.getItem('user');

    if (usuario) {
      const token = JSON.parse(usuario).token;

      if (typeof request === 'string') {
        if (!options) {
          // let's make option object
          options = {headers: new Headers()};
        }
        // options.headers.set('Authorization', `Bearer ${token}`);
        options.headers.set('Authorization', `${token}`);
      } else {
      // we have to add the token to the url object
        // url.headers.set('Authorization', `Bearer ${token}`);
        request.headers.set('Authorization', `${token}`);
      }
    }

    const baseUrl = process.env.NODE_ENV === 'production' ?
      'https://api-tccprojetotrocas.herokuapp.com/api' :
      'http://localhost:8080/api';

    request.url = `${baseUrl}${request.url}`;

    return super.request(request, options).catch(this.catchAuthError(this));
  }

  private catchAuthError (self: HttpService) {
    // we have to pass HttpService's own instance here as `self`
    return (res: Response) => {
      console.log(res);
      if (res.status === 401 || res.status === 403) {
        // if not authenticated
        console.log(res);
      }
      return Observable.throw(res);
    };
  }
}
