import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { IAlumno } from 'src/app/interfaces/ialumnos';
import { AlertController } from '@ionic/angular';
import { RegistroserviceService } from 'src/app/services/registroservice.service';
import { Platform, ToastController, IonList } from '@ionic/angular';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})

export class FormularioPage implements OnInit {
  newAlumno: IAlumno = {
    nombre: '',
    correo: '',
    password: '',
    
  }
  registroForm: FormGroup

  constructor(private menuController: MenuController,
              private registroservicio: RegistroserviceService,
              private fbuilder: FormBuilder,
              private alertController: AlertController)
              {
                this.registroForm = this.fbuilder.group({
                  'nombre': new FormControl("", [Validators.required, Validators.minLength(3)]),
                  'correo': new FormControl("", [Validators.required, Validators.minLength(3)]),
                  'password': new FormControl("", [Validators.required, Validators.minLength(3)])
                })
              }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }
  registrarUsuario(){
    this.newAlumno.nombre = this.registroForm.value.nombre;
    this.newAlumno.correo = this.registroForm.value.correo;
    this.newAlumno.password = this.registroForm.value.password;
    this.registroservicio.crearAlumno(this.newAlumno).subscribe();
    this.registroForm.reset();
  }

  async mostrarMensaje(){
    const alerta = await this.alertController.create({
      header: 'Usuario..',
      message: 'Usuario ha sido creado',
      buttons: ['OK'],
    });
    alerta.present();
  }


}
