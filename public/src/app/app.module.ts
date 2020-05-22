import { HttpService } from './http.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BugListComponent } from './bug-list/bug-list.component';
import { SingleBugComponent } from './bug-list/single-bug/single-bug.component';
import { NewBugComponent } from './bug-list/new-bug/new-bug.component';
import { EditBugComponent } from './bug-list/edit-bug/edit-bug.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    BugListComponent,
    SingleBugComponent,
    NewBugComponent,
    EditBugComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
