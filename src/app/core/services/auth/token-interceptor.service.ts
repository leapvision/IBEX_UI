import { Observable } from "rxjs";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private inject: Injector) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authService = this.inject.get(AuthService);
    let access_token = req.clone({
      setHeaders: {
        Authorization: "Bearer " + authService.getAccessToken(),
      },
    });

    return next.handle(access_token);
  }
}
