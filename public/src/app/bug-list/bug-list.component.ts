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
  constructor(private _httpService: HttpService, private _router: Router) {}

  ngOnInit() {
    this._httpService
      .getAllBugs()
      .subscribe((data: any) => (this.bugs = data.bugs));
  }
  deleteHandler(id) {
    console.log('delete a bug');
    this._httpService.deleteBug(id).subscribe(() => {
      this.bugs = this.bugs.filter((bug) => {
        bug._id !== id;
      });
    });
  }
  goToEditTemplate(id) {
    this._router.navigate(['/' + id + '/edit']);
  }
}
