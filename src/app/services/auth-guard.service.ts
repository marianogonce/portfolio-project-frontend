import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './authService/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router : Router, private authService: AuthService) { }

  canActivate() {
      if(this.authService.isLoggedIn()) return true;
      this.router.navigate(['/login']);
      return false;
  }
}
