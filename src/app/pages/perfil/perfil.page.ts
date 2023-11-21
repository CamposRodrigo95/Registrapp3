import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { RegistroserviceService } from 'src/app/services/registroservice.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  alumno = {
    id:0,
    nombre: '',
    correo: '',
    password: ''
  }


  constructor(private menuController: MenuController,
              private navController: NavController,
              private registroService: RegistroserviceService,
              private router: Router,
              private alertcontroller: AlertController) {
                
               }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }

  ionViewWillEnter() {
    this.getUsuarioById(this.getIdFromUrl());
  }
  
  getIdFromUrl() {
    let url = this.router.url;
    let arr = url.split("/", 3);
    let id = parseInt(arr[2]);
    return id;
  }
  

  getUsuarioById(alid: number){
    this.registroService.BuscarAlumnoId(alid).subscribe(
    (resp:any)=>{
      this.alumno={
        id: resp[0].id,
        nombre: resp[0].nombre,
        correo: resp[0].correo,
        password: resp[0].password
      }
    }
    )
  }
  cerrarSesion(){
    sessionStorage.clear();
    this.mensajeCerrar();
    this.router.navigateByUrl('/ing-alumno');
    
  }
  async mensajeCerrar(){
    const alerta = await this.alertcontroller.create({ 
      header : 'Graciaas!',
      message : 'Hasta la próxima! :D',
      buttons : ['OK']
    })
    alerta.present();
  }
  
}
