import { Component, OnInit, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-server-side-pagination';
  name = 'Angular ' + VERSION.major;
  collection: any;
  p: number;
  itemsPerPage = 5;
  totalItems: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    const url = `https://api.instantwebtools.net/v1/passenger?page=${0}&size=${this.itemsPerPage}`;
    this.http.get(url).subscribe((data: any) => {
      console.log(data);
      this.collection = data;
      this.totalItems = data.totalPassengers;
    });
  }

  getPage(page) {
    const url = `https://api.instantwebtools.net/v1/passenger?page=${page}&size=${this.itemsPerPage}`;
    this.http.get(url).subscribe((data: any) => {
      console.log(data);
      this.collection = data;
      this.totalItems = data.totalPassengers;
    });
  }
}
