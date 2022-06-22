import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "./user.service";
import { User } from "./user";

@Component({
    templateUrl: "./edit-user.component.html",
    styleUrls: ["./edit-user.component.css"]
})
export class EditUserComponent implements OnInit {

    constructor(private _userService: UserService, private activateroute: ActivatedRoute) { }

    user: any;

    ngOnInit(): void {
        const id = this.activateroute.snapshot.paramMap.get("id");
        this.user = this._userService.getUserId(Number(id));
    }

    saveUser(usuario: any): void {
        this.user = usuario;
    }

}