import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { SigninComponent } from './signin/signin.component';
import { appRoutingModule } from './app.routing';
import { AdmissionComponent } from './admission/admission.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    SigninComponent,
    AdmissionComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    appRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
