import { Routes, Router } from '@angular/router';
import { HttpService } from './../../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-bug',
  templateUrl: './new-bug.component.html',
  styleUrls: ['./new-bug.component.css'],
})
export class NewBugComponent implements OnInit {
  newBug = {
    title: '',
    person: '',
    description: '',
  };
  errors = [];

  constructor(private _httpService: HttpService, private _router: Router) {}

  ngOnInit(): void {}

  createBug() {
    this.errors = [];

    this._httpService.createBug(this.newBug).subscribe((data: any) => {
      if (data.hasOwnProperty('errors')) {
        for (let key in data.errors) {
          this.errors.push(data.errors[key].message);
        }
      } else {
        this._router.navigate(['/']);
      }
    });
  }
}
