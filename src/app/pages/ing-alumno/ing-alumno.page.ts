import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController,NavController } from '@ionic/angular';
import { RegistroserviceService } from 'src/app/services/registroservice.service';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ing-alumno',
  templateUrl: './ing-alumno.page.html',
  styleUrls: ['./ing-alumno.page.scss'],
})
export class IngAlumnoPage implements OnInit {
  userdata: any;

  alumno={
    id:0,
    nombre:"",
    correo:"",
    password:"",
    
  }

  loginForm: FormGroup;

  constructor(private menuController: MenuController,
              private router: Router,
              private registroservice: RegistroserviceService,
              private alertController: AlertController,
              private toastController: ToastController,
              private builder: FormBuilder){
                this.loginForm = this.builder.group({
                  'correo': new FormControl("",[Validators.required, Validators.minLength(3)]),
                  'password': new FormControl("",[Validators.required, Validators.minLength(3)]),
                })
               }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }
  
  login() {
    if (this.loginForm.valid) {
      this.registroservice.GetUserById(this.loginForm.value.correo).subscribe(resp => {
        this.userdata = resp;
        console.log(this.userdata);

        if (this.userdata.length > 0) {
          this.alumno = {
            id: this.userdata[0].id,
            nombre: this.userdata[0].nombre,
            correo: this.userdata[0].correo,
            password: this.userdata[0].password,
          };

          if (this.alumno.password === this.loginForm.value.password) {
            sessionStorage.setItem('id', this.alumno.id.toString());
            sessionStorage.setItem('correo', this.alumno.correo); // Puedes cambiarlo a 'nombre' o 'correo' según tus necesidades.
            sessionStorage.setItem('password', this.alumno.password);            

            this.showToast('Sesión Iniciada');
            this.loginForm.reset();
            this.router.navigateByUrl("/perfil");
            
            
          } else {
            this.Error();
          }
        } else {
          this.loginForm.reset();
          this.NoExiste();
        }
      });
    } 
  }
  async showToast(msg: any){
    const toast= await this.toastController.create({
      message:msg,
      duration: 3000
    })
    toast.present();
  }
  async Error(){
    const alerta = await this.alertController.create({ 
      header : 'Error..',
      message : 'Revise sus credenciales',
      buttons : ['OK']
    })
    alerta.present();
  }

  async NoExiste(){
    const alerta = await this.alertController.create({ 
      header : 'No existe...',
      message : 'Debe registrarse..',
      buttons : ['OK']
    })
    alerta.present();
  }

}

  


  

