import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(private authService: AuthService, private router: Router){}
  isLoggedIn = this.authService.isLoggedIn;
  wylogowanie() {
 
    this.authService.logout(); 
    this.isLoggedIn = false;
    this.router.navigate(['/']); 
  }

}
