import { Component, OnInit } from "@angular/core";
import { User } from "./user";

const USERS: User[] = [
    {
        imgUrl: "assets/imgs/person1.jpg",
        name: "Rafael Silva",
        email: "rafael@gmail.com",
        site: "www.rafapcode.com",
        date: new Date()
    },

    {
        imgUrl: "assets/imgs/person2.jpeg",
        name: "Flávia Albuquerque",
        email: "flaalbuquerquer@hotmail.com",
        site: "www.flaviacorretoras.com",
        date: new Date()
    },

    {
        imgUrl: "assets/imgs/person3.jpg",
        name: "Marina Smith",
        email: "marinaSM@gmail.com",
        date: new Date()
    },

    {
        imgUrl: "assets/imgs/person4.jpg",
        name: "Barbara Caldeiras",
        email: "barbaracaldeiras@yahoo.com",
        date: new Date()
    },

    {
        imgUrl: "assets/imgs/person5.jpg",
        name: "Rafael Martins",
        email: "rafaelMns@gmail.com",
        site: "www.softwareDeveloperRafaelMartins.com.br",
        date: new Date()
    }
]




@Component({
    templateUrl: "./user-list.component.html",
    styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {

    userss: User[] = [];

    ngOnInit(): void {
        this.userss = USERS;
    }

}