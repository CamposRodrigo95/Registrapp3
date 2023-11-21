import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.page.html',
  styleUrls: ['./acerca.page.scss'],
})
export class AcercaPage implements OnInit {

  constructor(private menuController: MenuController) { }
  

  ngOnInit() {
  }
  
  mostrarMenu(){
    this.menuController.open('first');
  }

}
