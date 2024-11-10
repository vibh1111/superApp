
import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {
        path:'',
        loadComponent:() =>import('./registration/registration.component').then(c=>RegistrationComponent)
    },
    
    {
        path: 'category',
        loadComponent: () => import('./categories/categories.component').then(c => c.CategoriesComponent)
    },
    {
        path:'home',
        loadComponent:()=>import('./home-page/home-page.component').then(c=>HomePageComponent),
    },
    {
        path:'about',
        loadComponent:()=>import('./about/about.component').then(c=>AboutComponent)
    },
];
