import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { CoursesComponent } from './courses';
import { SigninComponent } from './signin';
import {AdmissionComponent} from './admission';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'signin', component: SigninComponent },
    {path: 'admission', component: AdmissionComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);