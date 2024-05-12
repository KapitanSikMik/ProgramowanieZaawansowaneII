import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'] // Poprawiłem styleUrl na styleUrls
})
export class DashboardComponent {
  constructor(private authService: AuthService, private router: Router){}
  isLoggedIn = this.authService.isLoggedIn;

  
}

