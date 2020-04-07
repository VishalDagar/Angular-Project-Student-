import { Component } from '@angular/core';

import { FormBuilder, Validators, FormGroup,FormArray } from '@angular/forms';
import { forbiddenNameValidator } from 'src/shared/student-name.validator';
import { PasswordValidator } from 'src/shared/password.validator';
import {SignInService} from './signin/signin.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = '';
}
