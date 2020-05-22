import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.css'],
})
export class BugListComponent implements OnInit {
  bugs = [];
  constructor(private _httpService: HttpService) {}

  ngOnInit(): void {
    this._httpService
      .getAllBugs()
      .subscribe((data: any) => (this.bugs = data.bugs));
  }
}
