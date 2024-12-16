import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  constructor(private http: HttpClient){}
  userData:any = [];
    ngOnInit() {
      this.http.get<{ data:Data[] }>('https://reqres.in/api/users')
        .subscribe(
          (response) => {
            this.userData = response.data;
            console.log(this.userData);
          },
          (error) => {
            console.error('Error fetching user data:', error);
          }
        );
    }
}
