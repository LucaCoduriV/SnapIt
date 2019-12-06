import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

post = [
  {
    id: 1,
    nickname: "Luca",
    description: "voici une description",
    pictureUrl: "../../assets/tes.jpeg"
  },
  {
    id: 2,
    nickname: "Stéphane",
    description: "voici une description",
    pictureUrl: "../../assets/tes.jpeg"
  },
  {
    id: 3,
    nickname: "Julien",
    description: "voici une description",
    pictureUrl: "../../assets/tes.jpeg"
  },
  {
    id: 4,
    nickname: "Milos",
    description: "voici une description",
    pictureUrl: "../../assets/tes.jpeg"
  },
  {
    id: 5,
    nickname: "Bastien",
    description: "voici une description",
    pictureUrl: "../../assets/tes.jpeg"
  }
]

constructor() { }

getPosts():any[]{
  return this.post;
}

}
