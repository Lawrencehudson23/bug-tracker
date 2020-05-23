import { Router } from '@angular/router';
import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.css'],
})
export class BugListComponent implements OnInit {
  bugs = [];
  currentUser = null;

  constructor(private _httpService: HttpService, private _router: Router) {}

  ngOnInit() {
    this._httpService.getCurrentUser().subscribe((data: any) => {
      if (data.user) {
        this.currentUser = data.user;
      } else {
        this._router.navigate(['/login']);
      }
    });

    this._httpService
      .getAllBugs()
      .subscribe((data: any) => (this.bugs = data.bugs));
  }
  deleteHandler(id) {
    this._httpService.deleteBug(id).subscribe(() => {
      this.bugs = this.bugs.filter((bug) => bug._id !== id);
    });
  }
  goToEditTemplate(id) {
    this._router.navigate(['/' + id + '/edit']);
  }
  logoutUser() {
    this._httpService.logOutUser().subscribe(() => {
      this._router.navigate(['/login']);
    });
  }
}
