import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { BarcodeScanner, BarcodeScannerOptions } from '@awesome-cordova-plugins/barcode-scanner/ngx';


@Component({
  selector: 'app-qrscan',
  templateUrl: './qrscan.page.html',
  styleUrls: ['./qrscan.page.scss'],
  providers: [BarcodeScanner]
})
export class QrscanPage implements OnInit {

  qrText: string;

  constructor(private menuController: MenuController,
            private navController: NavController,
            private barcodeScanner: BarcodeScanner, 
            private toastController: ToastController,
            private router: Router,
            private alertcontroller: AlertController) { 
              this.qrText = '';
            }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }
  readBarcode(){
    let opts: BarcodeScannerOptions={
      prompt: 'Coloque el codigo qr en el recuadro'
    };
    this.barcodeScanner.scan(opts).then((barcodeData)=>{
      this.qrText = barcodeData.text;
    }).catch(err=> {
      console.log('Error',err);
    });
  }
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
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