import { Injectable } from '@angular/core';
import { ILogin } from '../interfaces/ILogin';
import { PostService } from './post.service';


@Injectable({
    providedIn: 'root'
})
export class AuthService implements ILogin {
    login: string;
    password: string;

    constructor(private postService : PostService) { }

    checkLogin(user:string,password:string,callback){
        let status:boolean;
        this.postService.getUser(user).subscribe(data =>{
            console.log(data[0].password);
            console.log(password);
            if(data[0].password == password){
                status = true;
            }else{
                status = false;
            }
            callback(status);
        });
    }

    logout(): void {
        localStorage.setItem('isLoggedIn', 'false');
        localStorage.removeItem('token');
    }
}
