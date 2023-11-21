import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngAlumnoPage } from './ing-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: IngAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngAlumnoPageRoutingModule {}
