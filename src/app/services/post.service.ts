import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  post =
    {
      "auth": {
        user: "luca",
        password: "pro"
      }
    };



  constructor(private http: HttpClient) { }

  

  async getPosts() {
    setTimeout(()=>{
      return this.http.post<object>("http://localhost:8080/getpostsWithUsers", this.post).toPromise();
    },1000)

  }

}
