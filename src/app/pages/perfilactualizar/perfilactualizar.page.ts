import { Component, OnInit } from '@angular/core';
import { RegistroserviceService } from 'src/app/services/registroservice.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfilactualizar',
  templateUrl: './perfilactualizar.page.html',
  styleUrls: ['./perfilactualizar.page.scss'],
})
export class PerfilactualizarPage implements OnInit {
  alumno = {
    id:0,
    nombre: '',
    correo: '',
    password: ''
  }

  constructor(private registroservice: RegistroserviceService,
              private router: Router,
              private alertcontroller: AlertController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getUsuarioById(this.getIdFromUrl());
  }

  getIdFromUrl(){
    let url=this.router.url;
    let arr=url.split("/",3);
    let id = parseInt(arr[2]);
    return id;
  }

  getUsuarioById(alumnoid: number){
    this.registroservice.BuscarAlumnoId(alumnoid).subscribe(
      (resp:any)=>{
        console.log(resp);
        this.alumno={
          id: resp[0].id,
          nombre: resp[0].nombre,
          correo: resp[0].correo,
          password: resp[0].password
        }
      }
    )
  }

  ActualizarUsuario(){
    this.registroservice.ActualizarAlumno(this.alumno).subscribe();
    this.mostrarMensaje();    
  }

  async mostrarMensaje(){
    const alerta = await this.alertcontroller.create({
      header: 'Usuario Actualizado',
      message: 'Su informacion se ha modificado '+ this.alumno.nombre,
      buttons: ['OK']
    });
    alerta.present();
  }

}
