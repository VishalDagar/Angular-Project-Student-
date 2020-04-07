import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ICourse } from './courses';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private _url: string = "/assets/data/courses.json"
  
 //we injected as a dependency in the employee service
 // we have an instance of httpclient as http
 constructor(private http: HttpClient) { }

  getCourses(): Observable<ICourse[]>{
     return this.http.get<ICourse[]>(this._url);
  
}
}