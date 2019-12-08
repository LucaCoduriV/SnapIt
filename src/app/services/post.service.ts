import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    }



  constructor(private http: HttpClient) { }


  getPosts() {
    return this.http.post("http://localhost:8080/getpostsWithUsers", this.post);
  }

}
