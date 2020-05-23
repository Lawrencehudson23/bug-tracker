import { LoginComponent } from './login/login.component';
import { SingleBugComponent } from './bug-list/single-bug/single-bug.component';
import { EditBugComponent } from './bug-list/edit-bug/edit-bug.component';
import { BugListComponent } from './bug-list/bug-list.component';
import { NewBugComponent } from './bug-list/new-bug/new-bug.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'new',
    component: NewBugComponent,
  },
  {
    path: 'home',
    component: BugListComponent,
  },
  {
    path: ':id/edit',
    component: EditBugComponent,
  },
  {
    path: ':id',
    component: SingleBugComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
