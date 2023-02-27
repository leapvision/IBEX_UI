import { Observable } from "rxjs";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { AuthService } from "./auth.service";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(
    private inject: Injector,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authService = this.inject.get(AuthService);

    const access_token = authService.getAccessToken();

    if (access_token && !req.headers.has("Authorization")) {
      req = req.clone({
        setHeaders: {
          Authorization: "Bearer " + access_token,
        },
      });
    } else {
      req = req.clone();
    }
    return next.handle(req).pipe(
      tap((response) => {
        if (response instanceof HttpResponse) {
          if (response.body && response.body.Result) {
            switch (response.body.Result) {
              case "Success":
                this.toastr.success(response.body.Message);
                break;
              case "Warning":
                this.toastr.warning(response.body.Message);
                this.spinner.hide();
                break;
              case "Failure":
                this.toastr.error(response.body.Message);
                this.spinner.hide();
                break;
              default:
                console.log(response.body.Message);
            }
          }
        }
      })
    );
  }
}
