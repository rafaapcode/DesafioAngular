import { Injectable } from "@angular/core";
import { User } from "./user";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    users: User[] = [];


    getAllUsers(): User[] {
        this.users = USERS;

        return this.users;
    }

    getUserId(id: number) {
        return this.users.find(user => user.id === id);
    }

    add(user: User): User[]{
        user.id = this.users.length;
        this.users.push(user);
        return this.users;
    }

}


const USERS: User[] = [
    {
        imgUrl: "assets/imgs/person1.jpg",
        name: "Rafael Silva",
        email: "rafael@gmail.com",
        site: "www.rafapcode.com",
        date: new Date(2019, 9, 1),
        id: 0
    },

    {
        imgUrl: "assets/imgs/person2.jpeg",
        name: "Flávia Albuquerque",
        email: "flaalbuquerquer@hotmail.com",
        site: "www.flaviacorretoras.com",
        date: new Date(2020, 4, 19),
        id: 1
    },

    {
        imgUrl: "assets/imgs/person3.jpg",
        name: "Marina Smith",
        email: "marinaSM@gmail.com",
        date: new Date(2020, 8, 9),
        id: 2
    },

    {
        imgUrl: "assets/imgs/person4.jpg",
        name: "Barbara Caldeiras",
        email: "barbaracaldeiras@yahoo.com",
        date: new Date(2022, 1, 22),
        id: 3
    },

    {
        imgUrl: "assets/imgs/person5.jpg",
        name: "Rafael Martins",
        email: "rafaelMns@gmail.com",
        site: "www.softwareDeveloperRafaelMartins.com.br",
        date: new Date(2018, 5, 20),
        id: 4
    }
]
