import {CanActivateFn, Router} from '@angular/router';
import {CookieManagerService} from "../cookies/cookie-manager.service";
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
  let cookieService = inject(CookieManagerService);
  let routerService = inject(Router);

  if (!cookieService.isTokenExists()) {
    routerService.navigateByUrl('/login');
    return false;
  } else {
    return true;
  }
};
