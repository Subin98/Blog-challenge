import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
private subject= new Subject<void>();
  constructor(private http:HttpClient) { }

  getblogs()
  {
    return this.http.get("http://localhost:3000/blogs");
  }
  getblogger(id:any)
  {
    return this.http.get("http://localhost:3000/blogger/"+id);
    console.log(id)
  }

  sendclick()
  {
    this.subject.next();
  }

  getclick()
  {
    return this.subject.asObservable();
  }

}
