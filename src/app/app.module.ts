import { MatIconModule } from '@angular/material/icon';
import { UserListComponent } from './user/user-list.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditUserComponent } from './user/edit-user.component';
import { TracePipe } from './user/pipe/trace.pipe';
import { AddUserComponent } from './user/add-user.component';

const routes: Routes = [
  {
    path: "", redirectTo: "users", pathMatch: "full"
  },
  {
    path: "users", component: UserListComponent
  },
  {
    path: "users/edit/:id", component: EditUserComponent
  },
  {
    path: "users/add", component: AddUserComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    EditUserComponent,
    TracePipe,
    AddUserComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
