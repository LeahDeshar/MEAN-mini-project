import { Component } from '@angular/core';
import { ModalService } from './modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(public modalService: ModalService, private router: Router) {}

  openLoginModal() {
    this.modalService.showModal();
  }
  openRegisterModal() {
    this.modalService.showRegisterModal();
  }

  navigateDashboard() {
    this.router.navigate(['/dashboard']);
  }
  navigateHome() {
    this.router.navigate(['/home']);
  }
}
