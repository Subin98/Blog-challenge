import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  Blog={
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
  }
  item:any;
  page:any=0;
  Bloglist:any;
  limit:any;

  constructor(private blog:BlogService) { }

  ngOnInit(): void {
    this.blog.getblogs()
    .subscribe(data=>{
    this.Bloglist= JSON.parse(JSON.stringify(data));
    this.limit=(this.Bloglist.length)-1;
    this.Blog = this.Bloglist[this.page];
    localStorage.setItem("id",this.Bloglist[this.page]._id)
    });

  }
  
  next(){
    
    if(this.page<this.limit)
    {
  this.page= 1 +this.page;
  console.log(this.page)
  this.Blog = this.Bloglist[this.page];
  localStorage.setItem("id",this.Bloglist[this.page]._id)
  this.blog.sendclick();
    }
  }
  back(){
    if(this.page>0)
    {
      this.page= this.page-1;
      console.log(this.page)
      this.Blog = this.Bloglist[this.page];
      localStorage.setItem("id",this.Bloglist[this.page]._id)
      this.blog.sendclick();
    }
  }
  

  
}
