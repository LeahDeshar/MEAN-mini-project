import { Component } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(public modalService: ModalService) {}

  onSubmit() {}
  hideLoginModal() {
    this.modalService.hideModal();
  }
  openRegisterModal() {
    this.modalService.showRegisterModal();
    this.modalService.hideModal();
  }
}
