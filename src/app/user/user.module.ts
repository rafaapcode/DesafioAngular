import { Router, RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { AddUserComponent } from "./add-user.component";
import { EditUserComponent } from "./edit-user.component";
import { UserListComponent } from "./user-list.component";
import { FormsModule } from '@angular/forms';
import { TraceModule } from '../shared/pipe/trace.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AddUserComponent,
        EditUserComponent,
        UserListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        TraceModule,
        RouterModule.forChild([
            {
                path: "users", component: UserListComponent
            },
            {
                path: "users/edit/:id", component: EditUserComponent
            },
            {
                path: "users/add", component: AddUserComponent
            }
        ]),
    ]
})
export class UserModule { } 