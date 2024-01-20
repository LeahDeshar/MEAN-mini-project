import { Component } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(public modalService: ModalService) {}

  hideRegisterModal() {
    this.modalService.hideRegisterModal();
  }
  openLoginModal() {
    this.modalService.showModal();
    this.modalService.hideRegisterModal();
  }
}
