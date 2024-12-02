import { Routes } from '@angular/router';

export const routes: Routes = [
{
    path: '',//🏠 Pagina de inicio
    loadComponent: () => import('./View/home/home.component').then(m =>m.HomeComponent)
},
{
    path: 'about',//ℹ️ Acerca de 
    loadComponent: () => import('./View/about/about.component').then(m =>m.AboutComponent)
},
{
    path: 'contact',//📬 Contacto
    loadComponent: () => import('./View/contact/contact.component').then(m =>m.ContactComponent)
},
{
    path:'**',
    redirectTo: '',
    pathMatch:'full'
}
];

