import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpService } from './../../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-bug',
  templateUrl: './edit-bug.component.html',
  styleUrls: ['./edit-bug.component.css'],
})
export class EditBugComponent implements OnInit {
  bug = null;
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this._httpService
        .getBugById(params.id)
        .subscribe((data: any) => (this.bug = data.bug));
    });
  }
  editBug() {
    this._httpService
      .updateBug(this.bug._id, {
        title: this.bug.title,
        person: this.bug.person,
        description: this.bug.description,
      })
      .subscribe((data: any) => {
        if (data.hasOwnProperty('errors')) {
          //TODO: ERROR
        } else {
          this._router.navigate(['/home']);
        }
      });
  }
}
