import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:HomeComponent, pathMatch:'full', title: 'Home'},
    {path:'**', component:NotFoundComponent, pathMatch:'full', title: 'NotFound'}
];
