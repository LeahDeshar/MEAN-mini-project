import { Component } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(public modalService: ModalService) {}

  openLoginModal() {
    this.modalService.showModal();
  }
  openRegisterModal() {
    this.modalService.showRegisterModal();
  }
}
