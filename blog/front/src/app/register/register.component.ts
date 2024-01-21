import { Component } from '@angular/core';
import { ModalService } from '../modal.service';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registrationForm: any;
  user = { username: '', email: '', password: '' };

  constructor(
    public modalService: ModalService,
    private authService: AuthService
  ) {}

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
  register() {
    this.authService.register(this.user).subscribe({
      next: (response) => {
        console.log('Registration successful:', response);
      },
      error: (error) => {
        console.error('Registration failed:', error);
      },
    });
  }

  hideRegisterModal() {
    this.modalService.hideRegisterModal();
  }
  openLoginModal() {
    this.modalService.showModal();
    this.modalService.hideRegisterModal();
  }
}
