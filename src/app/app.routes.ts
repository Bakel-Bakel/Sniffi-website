import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth/login',
    loadComponent: () => import('./layouts/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: '',
    loadComponent: () => import('./layouts/dashboard/dashboard.component').then(m => m.DashboardComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard' // 👈 This makes "the-story" the default
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./layouts/dashboard-home/dashboard-home.component').then(m => m.DashboardHomeComponent),
      },
      {
        path: 'alert',
        loadComponent: () => import('./layouts/alert-contact/alert-contact.component').then(m => m.AlertContactComponent),
      },
      // {
      //   path: 'mapping',
      //   loadComponent: () => import('./layouts/mapping/mapping.component').then(m => m.MappingComponent),
      // },
      {
        path: 'devices',
        loadComponent: () => import('./layouts/devices/devices.component').then(m => m.DevicesComponent),
      },
      {
        path: 'target-smells',
        loadComponent: () => import('./layouts/target-smells/target-smells.component').then(m => m.TargetSmellsComponent),
      },
      {
        path: 'add-smell',
        loadComponent: () => import('./layouts/add-smell/add-smell.component').then(m => m.AddSmellComponent),
      },
      {
        path: 'contact-us',
        loadComponent: () => import('./layouts/contact/contact.component').then(m => m.ContactComponent),
      },
    ]
  },
];
