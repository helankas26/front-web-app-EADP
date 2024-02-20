import {HttpErrorResponse, HttpInterceptorFn, HttpResponse} from '@angular/common/http';
import {CookieManagerService} from "../services/cookies/cookie-manager.service";
import {inject} from "@angular/core";
import {LoadingStatusService} from "../services/status-management/loading-status.service";
import {catchError, tap, throwError} from "rxjs";

export const httpManagerInterceptor: HttpInterceptorFn = (req, next) => {
  const cookieManagerService = inject(CookieManagerService);
  const loadingStatusService = inject(LoadingStatusService);

  loadingStatusService.loadingState.next(true);

  if (cookieManagerService.isTokenExists()) {
    const token = cookieManagerService.getToken();
    console.log(token);
    req = req.clone({
      headers: req.headers.set('Authorization', token),
    });
  }

  return next(req).pipe(
    tap(event => {
      if (event instanceof HttpResponse && event.status >= 200) {
        loadingStatusService.loadingState.next(false);
      }
    }),
    catchError((error: HttpErrorResponse) => {
      loadingStatusService.loadingState.next(false);
      console.log(error);
      // error manage
      return throwError(() => error.error);
    }),
  );
};
