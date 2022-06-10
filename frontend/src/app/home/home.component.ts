import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Bloglist:any={
    Author:"",
    PublishedDate:"",
    BlogName:"",
    BlogContent:"",
    Comments:[{
        name:"",
        comment:""
    }],
    BlogImage:"",
    AuthorImage:"",
    Followers:''
  };
  item:any;
  page:any=0;
  limit:any;
  clickeventsubscribe:Subscription | undefined;
 id = localStorage.getItem("id");
 i=0;

Blog:any;

  constructor(private blog:BlogService) { 
    blog.getclick().subscribe(()=>{
      this.id = localStorage.getItem("id");
      this.blog.getblogger(this.id)
    .subscribe(data=>{
      this.Bloglist=data;
      var date = new Date(this.Bloglist.PublishedDate);
      var day=date.getDate()
      var month=date.getMonth()
      var year=date.getFullYear();
      this.Bloglist.PublishedDate = day+"-"+month+"-"+year;
    })

    })
  }

  ngOnInit(): void {

    this.blog.getblogger(this.id)
    .subscribe(data=>{
      this.Bloglist=data;
      var date = new Date(this.Bloglist.PublishedDate);
      var day=date.getDate()
      var month=date.getMonth()
      var year=date.getFullYear();
      console.log(date)
      this.Bloglist.PublishedDate = day+"-"+month+"-"+year;
    });
   
  }

}

