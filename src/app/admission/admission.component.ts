import { Component, OnInit, NgModule } from '@angular/core';

import { FormBuilder, Validators, FormGroup,FormArray } from '@angular/forms';
import { forbiddenNameValidator } from 'src/shared/student-name.validator';
import { PasswordValidator } from 'src/shared/password.validator';
import {RegistrationService} from './registration.service';


@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {

  registrationForm: FormGroup;
  get name() {
    return this.registrationForm.get('name');
  }

  get phone(){
    return this.registrationForm.get('phone');
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get alternateEmails(){
    return this.registrationForm.get('alternateEmails') as FormArray;
  }
  addAlternateEmail(){
    this.alternateEmails.push(this.fb.control('')); 
  }
  
  constructor(private fb: FormBuilder, private _registrationService: RegistrationService){}
  ngOnInit(){
    this.registrationForm = this.fb.group({
      
    name : ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/)]],
    email:[''],
    subscribe: [false],
    phone: [''],
    faculty:[''],
    enrollment: [''],
    address:this.fb.group({
      city: [''],
      state:  [''], 
      postalCode: ['']

    }),
    alternateEmails: this.fb.array([])
  });
  this,this.registrationForm.get('subscribe').valueChanges
  .subscribe(checkedValue =>{
    const email=this.registrationForm.get('email');
    if(checkedValue){
      email.setValidators(Validators.required);
    }else{
      email.clearValidators();
    }
    email.updateValueAndValidity();
  });
}



  onSubmit(){
    console.log(this.registrationForm.value);
    this._registrationService.register(this.registrationForm.value)
    .subscribe(
      response => console.log('Success!', response),
      error => console.error('Error!', error)
    );
  }
  title = 'Admission-Reactive-form';
}
