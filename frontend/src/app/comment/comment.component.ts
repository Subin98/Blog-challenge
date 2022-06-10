import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  clickeventsubscribe:Subscription | undefined;
 id = localStorage.getItem("id");
 i=0;
Bloglist:any;
comment:any;

  constructor( private blog:BlogService) { 
    blog.getclick().subscribe(()=>{
      this.id = localStorage.getItem("id");
      this.blog.getblogger(this.id)
    .subscribe(data=>{
      this.Bloglist=data;
      this.comment=this.Bloglist.Comments;
    })

    })
  }

  ngOnInit(): void {

    this.blog.getblogger(this.id)
    .subscribe(data=>{
      this.Bloglist=data;
      this.comment=this.Bloglist.Comments;
    });
  }

}
