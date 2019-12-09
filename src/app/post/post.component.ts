import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() id: number;
  @Input() username: string;
  @Input() description: string;
  @Input() pictureUrl: string;
  @Input() createTime: string;

  constructor() { }

  ngOnInit() {
    console.log("coucou", this.id, this.username);
  }

}
