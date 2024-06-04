import { Routes } from '@angular/router';
import path from 'path';
import { authGuard } from './guards/auth.guard';
import { dashboardGuard } from './guards/dashboard.guard';

export const routes: Routes = [

    {
        path: 'dashboard',
        loadComponent:()=> import('./dashboard/dashboard.component'),


        children:[{
            path:'control-flow',
            title:'control-flow',
            loadComponent:()=>import('./dashboard/pages/control-flow/control-flow.component')
        },
  {
    path:'Registro',
    title:'Registro',
    loadComponent:()=>import('./dashboard/pages/register/register.component'),
    canActivate:[authGuard]

  },
  {
    path:'Login',
    title:'Login',
    loadComponent:()=>import('./dashboard/pages/login/login.component'),
    canActivate:[dashboardGuard]

  },
        {
            path:'**',
            pathMatch:'full',
            redirectTo:'control-flow'
        }
    ],
    },
    {
    path:'**',
    pathMatch:'full',
    redirectTo:'dashboard'
    }


];

 // {
  //   path:'Bazar',
  //   title:'Bazar',
  //   loadComponent:()=>import('./dashboard/pages/formBazar/formBazar.component')

  // },

    //     {
    //         path:'defer-option',
    //         title:'defer-option',
    //         loadComponent:()=>import('./dashboard/pages/control-flow/defel-option/defel-option.component')

    //     },
    //     {
    //         path:'defer-views',
    //         title:'defer-views',
    //         loadComponent:()=>import('./dashboard/pages/defer-views/defer-views.component')

    //     },
    //     {
    //         path:'new page',
    //         title:'new page',
    //         loadComponent:()=>import('./dashboard/pages/control-flow/new page/new page.component')

    //     },
    //     {
    //       path:'Reactive forms',
    //       title:'Reactive forms',
    //       loadComponent:()=>import('./dashboard/pages/reactiveforms/reactiveforms.component')

    //   },
    //     {
    //       path:'Ropa',
    //       title:'Ropa',
    //       loadComponent:()=>import('./dashboard/pages/ropa/ropa.component')

    //   },
    //   {
    //     path:'Quiz',
    //     title:'Quiz',
    //     loadComponent:()=>import('./dashboard/pages/QuizForm/QuizForm.component')

    // },
    //   {
    //     path:'Songs',
    //     title:'Songs',
    //     loadComponent:()=>import('./dashboard/pages/dinamicForm/dinamicForm.component')

    // },
    //   {
    //     path:'Empleado',
    //     title:'Empleado',
    //     loadComponent:()=>import('./dashboard/pages/empleado/empleado.component')

    // },
  //   {
  //     path:'New',
  //     title:'New',
  //     loadComponent:()=>import('./dashboard/pages/formNew/formNew.component')

  // },
  // {
  //   path:'Contador',
  //   title:'Contador',
  //   loadComponent:()=>import('./dashboard/pages/contador/contador.component')

  // },
  // {
  //   path:'Pendientes',
  //   title:'Pendientes',
  //   loadComponent:()=>import('./dashboard/pages/Pendientes/Pendientes.component')

  // },
