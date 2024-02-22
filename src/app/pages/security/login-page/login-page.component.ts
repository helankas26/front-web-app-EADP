import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../../modules/utility/services/auth/auth.service";
import {CookieManagerService} from "../../../modules/utility/services/cookies/cookie-manager.service";
import {response} from "express";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit {

  constructor(private authService: AuthService, private cookieService: CookieManagerService, private router: Router) {
  }

  ngOnInit(): void {
    if (this.cookieService.isTokenExists()) {
      this.router.navigateByUrl('/');
    }
  }

  login() {
    this.authService.getToken().subscribe(response => {
      this.cookieService.createToken(response.data);
      this.router.navigateByUrl('/');
    })
  }
}
