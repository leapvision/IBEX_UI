import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let url: string = state.url;
    return this.checkUserLogin(next, url);
    // this.authService.haveAccess();
    // return true;
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.canActivate(next, state);
  }

  checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
    if (this.authService.isLoggedIn()) {
      const userRole = this.authService.getRole();
      console.log(route.data.role && route.data.role.includes(userRole));
      if (route.data.role && !route.data.role.includes(userRole)) {
        switch (userRole) {
          case "ibex_admin":
            this.router.navigate([`/pages/dashboard/admin/graph`]);
            break;
          case "ibex_quality":
            this.router.navigate([`/pages/dashboard/quality/graph`]);
            break;
          case "ibex_supervisor":
            this.router.navigate([`/pages/dashboard/supervisor/graph`]);
            break;
          default:
            this.router.navigate([""]);
            break;
        }
        return false;
      }
      return true;
    }

    this.router.navigate([""]);
    return false;
  }
}
