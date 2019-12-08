import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

post = 
{
  "auth":{
    user:"luca",
    password:"pro"
  }
}



constructor(private http:HttpClient) { }

getPosts(callback){

  this.http.post("http://localhost:8080/getusers",this.post).toPromise().then(data =>{
    setTimeout(()=>{
      callback(data);
    },1000)
    
  });
}

}
