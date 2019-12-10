import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { async } from 'q';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {

  posts:any;

  constructor(private postService : PostService) { }


  ngOnInit(){
    this.postService.getPosts().subscribe((data) => { 
      console.log(data);
      this.posts = data;
  });
     
  }

}
