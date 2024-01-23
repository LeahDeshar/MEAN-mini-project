import { Component } from '@angular/core';
import { ModalService } from './modal.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(
    public modalService: ModalService,
    private router: Router,
    public authService: AuthService
  ) {
    // this.profileImage = this.authService.getUser();
    console.log(this.authService.getUser());
  }

  profileImage: any;
  openLoginModal() {
    this.modalService.showModal();
  }
  openRegisterModal() {
    this.modalService.showRegisterModal();
  }

  navigateDashboard() {
    if (!this.authService.isLoggedIn()) {
      this.modalService.showModal();
      return;
    }
    this.router.navigate(['/dashboard']);
  }
  navigateHome() {
    this.router.navigate(['/home']);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
