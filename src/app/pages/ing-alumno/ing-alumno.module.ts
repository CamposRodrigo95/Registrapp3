import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { IngAlumnoPageRoutingModule } from './ing-alumno-routing.module';
import { IngAlumnoPage } from './ing-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    IngAlumnoPageRoutingModule
  ],
  declarations: [IngAlumnoPage]
})
export class IngAlumnoPageModule {}
