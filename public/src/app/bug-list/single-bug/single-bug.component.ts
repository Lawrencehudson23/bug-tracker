import { HttpService } from './../../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-bug',
  templateUrl: './single-bug.component.html',
  styleUrls: ['./single-bug.component.css'],
})
export class SingleBugComponent implements OnInit {
  bug = null;
  constructor(private _httpService: HttpService) {}

  ngOnInit(): void {}
}
