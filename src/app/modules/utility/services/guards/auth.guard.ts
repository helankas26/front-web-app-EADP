import {CanActivateFn, Router} from '@angular/router';
import {CookieManagerService} from "../cookies/cookie-manager.service";
import {inject} from "@angular/core";
import {SnackbarService} from "../alerts/snackbar.service";

export const authGuard: CanActivateFn = (route, state) => {
  let cookieService = inject(CookieManagerService);
  let routerService = inject(Router);
  let snackbarService = inject(SnackbarService);

  if (!cookieService.isTokenExists()) {
    snackbarService.openWarningSnackbar('Please login', 'Close');
    routerService.navigateByUrl('/login');
    return false;
  } else {
    return true;
  }
};
