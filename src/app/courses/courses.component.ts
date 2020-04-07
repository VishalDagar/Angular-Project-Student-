import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';
@Component({
  selector: 'app-courses',
  template: `
  
  <div [ngStyle]="{'background' : 'url(./assets/image/17200-background.jpg)'}">
  <h2> Course Details</h2>
 <ul *ngFor = "let course of courses">
 <li> {{course.name}} - {{course.code}}</li>
 </ul>
  
 </div>

  `,
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private _courseService: CoursesService) { }

public courses=[];

  ngOnInit(): void {
    //this returns an observable
    this._courseService.getCourses()
    //subscribing to observable
       .subscribe(data => this.courses = data);
       //.sds(argument => body of function)
 }
}
