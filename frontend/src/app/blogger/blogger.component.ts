import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blogger',
  templateUrl: './blogger.component.html',
  styleUrls: ['./blogger.component.css']
})
export class BloggerComponent implements OnInit {
  
  clickeventsubscribe:Subscription | undefined;
 id = localStorage.getItem("id");
 i=0;

Blog:any={
  Author:"",
  Followers:""
}
  constructor(private blog:BlogService) {

    blog.getclick().subscribe(()=>{
      this.id = localStorage.getItem("id");
      this.blog.getblogger(this.id)
    .subscribe(data=>{
      this.Blog=data;
      this.btnclass="btn btn-block btn-grad";
      this.btnvalue =" Follow"
      this.flag=true;
    })

    })
   }

  ngOnInit(): void {

    this.blog.getblogger(this.id)
    .subscribe(data=>{
      this.Blog=data;
      this.btnclass="btn btn-block btn-grad";
      this.flag=true;
    })
  }
btnvalue:String = "Follow";
btnclass= "btn btn-block btn-grad";
uclass="";
flag=true;
follow()
{
  this.flag = !this.flag;
  if(this.flag)
  {
    this.Blog.Followers = this.Blog.Followers-1;
    this.btnvalue =" Follow"
   this.btnclass="btn btn-block btn-grad";
  }
  else{
    this.Blog.Followers = this.Blog.Followers+1;
    this.btnvalue =" Following"
    this.btnclass="btn btn-block btn-success";
  }
  

}

}
