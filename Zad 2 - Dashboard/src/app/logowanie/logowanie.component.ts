import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.css']
})
export class LogowanieComponent {
  formData = {
  username: '',
  password: ''
  };

constructor(private authService: AuthService, private router: Router){}

  logowanie() {
    // Tutaj można zaimplementować logikę logowania
    this.authService.login();
    this.router.navigate(['/dashboard']);
    }
  }

