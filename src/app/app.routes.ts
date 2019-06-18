import { Routes, RouterModule } from '@angular/router';

import {HobbyComponent} from './components/hobby/hobby.component';
import {HomeComponent} from './components/home/home.component';
import {ViewFormComponent} from './components/view-form/view-form.component';



const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'hobby', component: HobbyComponent },
    { path: 'view', component: ViewFormComponent },
    { path: '**', redirectTo: 'view' } 
];

export const Routing= RouterModule.forRoot(routes, {useHash:true});
