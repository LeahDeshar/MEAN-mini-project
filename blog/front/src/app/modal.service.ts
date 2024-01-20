import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private showModalSubject = new BehaviorSubject<boolean>(false);
  showModal$ = this.showModalSubject.asObservable();

  private showModalRegister = new BehaviorSubject<boolean>(false);
  showRegisterModal$ = this.showModalRegister.asObservable();

  constructor() {}

  showModal() {
    this.showModalSubject.next(true);
  }

  hideModal() {
    this.showModalSubject.next(false);
  }

  showRegisterModal() {
    this.showModalRegister.next(true);
  }

  hideRegisterModal() {
    this.showModalRegister.next(false);
  }
}
