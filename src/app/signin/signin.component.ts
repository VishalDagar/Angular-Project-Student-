import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup,FormArray } from '@angular/forms';
import { forbiddenNameValidator } from 'src/shared/student-name.validator';
import { PasswordValidator } from 'src/shared/password.validator';
import {SignInService} from './signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signInForm: FormGroup;
  get studentName() {
    return this.signInForm.get('studentName');
  }

  get email() {
    return this.signInForm.get('email');
  }
  get alternateEmails(){
    return this.signInForm.get('alternateEmails') as FormArray;
  }
  addAlternateEmail(){
    this.alternateEmails.push(this.fb.control('')); 
  }
  
  constructor(private fb: FormBuilder, private _signInService: SignInService){}
  ngOnInit(){
    this.signInForm = this.fb.group({
      
      studentName : ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/)]],
      studentID: [''],
      email:[''],
    password: [''],
    confirmPassword: [''],
    
    alternateEmails: this.fb.array([])
  },{validator: PasswordValidator
  });
  this,this.signInForm.get('subscribe').valueChanges
  .subscribe(checkedValue =>{
    const email=this.signInForm.get('email');
    if(checkedValue){
      email.setValidators(Validators.required);
    }else{
      email.clearValidators();
    }
    email.updateValueAndValidity();
  });
}

  onSubmit(){
    console.log(this.signInForm.value);
    this._signInService.register(this.signInForm.value)
    .subscribe(
      response => console.log('Success!', response),
      error => console.error('Error!', error)
    );
  }
}
