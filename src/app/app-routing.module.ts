import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './ingresado.guard';


const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
  
  },  
  {
    path: 'formulario',
    loadChildren: () => import('./pages/formulario/formulario.module').then( m => m.FormularioPageModule),
    
  },
  {
    path: 'acerca',
    loadChildren: () => import('./pages/acerca/acerca.module').then( m => m.AcercaPageModule),
  },
  {
    path: 'ing-alumno',
    loadChildren: () => import('./pages/ing-alumno/ing-alumno.module').then( m => m.IngAlumnoPageModule),
   
  },
  {
    path: 'qrscan',
    loadChildren: () => import('./pages/qrscan/qrscan.module').then( m => m.QrscanPageModule),
  },
  {
    path: 'pronostico',
    loadChildren: () => import('./pages/pronostico/pronostico.module').then( m => m.PronosticoPageModule),
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule),

  },
  { 
    path: 'perfilactualizar/:id', loadChildren: () => import('./pages/perfilactualizar/perfilactualizar.module').then(m => m.PerfilactualizarPageModule),

  },
  ];
  
  
  
 
 


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
