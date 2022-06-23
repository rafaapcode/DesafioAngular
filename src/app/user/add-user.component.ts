import { Component, OnInit } from "@angular/core";
import { UserService } from "./user.service";


@Component({
    templateUrl: 'add-user.component.html',
    styleUrls: ["add-user.component.css"]
})
export class AddUserComponent implements OnInit {

    constructor(private _useService: UserService) { }

    newUser: any;

    ngOnInit(): void {
        this.newUser = {
            imgUrl: "assets/imgs/",
            name: "",
            email: "",
            site: "",
            date: new Date(),
            id: 0
        };
    }

    addUser(newuser: any) {
        this._useService.add(newuser);
    }

}