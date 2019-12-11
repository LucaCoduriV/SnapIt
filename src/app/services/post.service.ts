import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  

  getPosts():Observable<any> {
    return this.http.post("http://localhost:8080/getpostsWithUsers", this.post);
  }

  getUser(user:string):Observable<any>{
    this.post["user"] = {"username":user};
    return this.http.post("http://localhost:8080/getUser", this.post);
  }

}
