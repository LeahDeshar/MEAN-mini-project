import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      this.modalService.showModal();
      // this.router.navigate(['/login']);
    }
  }
}
