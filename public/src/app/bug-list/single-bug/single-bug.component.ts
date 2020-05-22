import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from './../../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-bug',
  templateUrl: './single-bug.component.html',
  styleUrls: ['./single-bug.component.css'],
})
export class SingleBugComponent implements OnInit {
  bug = null;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this._httpService.getBugById(params.id).subscribe((data: any) => {
        this.bug = data.bug;
      });
    });
  }
}
