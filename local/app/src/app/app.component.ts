import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { LocalStorageService } from './local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  data: any;

  storedData: any;
  constructor(
    private apiService: ApiService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.apiService.fetchData().subscribe((response) => {
      this.data = response;
      // console.log(this.data);
    });
  }

  storeData(): void {
    const data = { message: 'Hello, localStorage!' };
    this.localStorageService.setItem('myData', data);
  }

  getData(): void {
    this.storedData = this.localStorageService.getItem('myData');

    // const storedData = this.localStorageService.getItem('myData');
    // console.log('Stored Data:', storedData);
    // this.user.push(storedData);
  }
}
