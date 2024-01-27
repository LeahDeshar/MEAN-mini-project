import { Component } from '@angular/core';
import { ModalService } from '../modal.service';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    public modalService: ModalService,
    private authService: AuthService,
    private router: Router
  ) {}

  onLoginSubmit(form: NgForm) {
    console.log(form.value);
    this.authService.login(form.value).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        // this.authService.setToken(response.token);
        // this.authService.setUser(JSON.stringify(response.user));
        console.log(response.user);
        this.router.navigate(['/dashboard']);
        this.hideLoginModal();
      },
      error: (error) => {
        console.error('Login failed:', error);
      },
    });
  }
  hideLoginModal() {
    this.modalService.hideModal();
  }
  openRegisterModal() {
    this.modalService.showRegisterModal();
    this.modalService.hideModal();
  }
}
