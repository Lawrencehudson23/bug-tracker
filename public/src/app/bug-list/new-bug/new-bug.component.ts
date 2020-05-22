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

  constructor(private _httpService: HttpService, private _router: Router) {}

  ngOnInit(): void {}

  createBug() {
    this._httpService.createBug(this.newBug).subscribe((data: any) => {
      if (data.hasOwnProperty('errors')) {
        //TODO: ERROR
      } else {
        this._router.navigate(['/']);
      }
    });
  }
}
