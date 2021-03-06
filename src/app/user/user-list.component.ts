import { Component, OnInit } from "@angular/core";
import { User } from "./user";
import { UserService } from "./user.service";

@Component({
    templateUrl: "./user-list.component.html",
    styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {

    constructor(private usersService: UserService) { }

    userss: User[] = [];

    ngOnInit(): void {
        this.userss = this.usersService.getAllUsers();
    }

    delete(id: number) {
        let indexUser = this.userss.findIndex(user => user.id === id);
        this.userss.splice(indexUser, 1);
    }

}