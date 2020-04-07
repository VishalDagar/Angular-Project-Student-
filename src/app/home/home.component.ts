import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup,Form} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
