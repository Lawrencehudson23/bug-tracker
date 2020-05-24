import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginUser = {
    email: '',
    password: '',
  };
  registerUser = {
    name: '',
    email: '',
    password: '',
  };
  errors = [];
  constructor(private _httpService: HttpService, private _router: Router) {}

  ngOnInit(): void {}

  loginSubmit() {
    this.errors = [];
    this._httpService.loginUser(this.loginUser).subscribe((data: any) => {
      if (data.status === 'success') {
        this._router.navigate(['/home']);
      } else {
        for (let key in data.errors) {
          this.errors.push(data.errors[key].message);
        }
      }
    });
  }
  registerSubmit() {
    this.errors = [];
    this._httpService.registerUser(this.registerUser).subscribe((data: any) => {
      if (data.user) {
        this._router.navigate(['/']);
      } else {
        for (let key in data.errors) {
          this.errors.push(data.errors[key].message);
        }
      }
    });
  }
}
