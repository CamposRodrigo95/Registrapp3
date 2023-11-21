import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { RegistroserviceService } from './services/registroservice.service';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class IngresadoGuard implements CanActivate {

  constructor(private navController: NavController,
              private toast: ToastController,
              private router: Router,
              private registro: RegistroserviceService){}
              canActivate():
    
              | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
                if (!this.registro.IsLoggedIn()){
                  this.showToast('Debe iniciar sesión');
                  this.router.navigateByUrl('/ing-alumno');
                  return false;
                }
                else{
                  this.registro.IsLoggedIn();
                  return true;    
                }
                
              }
          
              async showToast(msg: any){
                const toast = await this.toast.create({
                  message:msg,
                  duration: 3000
                });
                toast.present();
              }
          
          }
          

  
  

