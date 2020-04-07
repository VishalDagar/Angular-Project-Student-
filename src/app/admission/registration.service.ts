
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  _url='http://localhost:3000/'
  constructor(private _http: HttpClient) { }

  register(studentData){
    return this._http.post<any>(this._url,studentData);
  }



}