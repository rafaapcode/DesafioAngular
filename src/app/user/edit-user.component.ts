import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "./user.service";
import { User } from "./user";
import { Router } from "@angular/router";

@Component({
    templateUrl: "./edit-user.component.html",
    styleUrls: ["./edit-user.component.css"]
})
export class EditUserComponent implements OnInit {

    constructor(private _userService: UserService, private activateroute: ActivatedRoute, private route: Router) { }

    user: any;

    ngOnInit(): void {
        const id = this.activateroute.snapshot.paramMap.get("id");
        this.user = this._userService.getUserId(Number(id));
    }

    saveUser(usuario: any): void {
        
        this.user = usuario;

        setTimeout(() => {
            this.route.navigate(['/users']);
        }, 1000)

    }

}