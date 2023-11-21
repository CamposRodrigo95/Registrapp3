import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-pronostico',
  templateUrl: './pronostico.page.html',
  styleUrls: ['./pronostico.page.scss'],
})
export class PronosticoPage implements OnInit {
  ciudad: string = '';
  temperatura: any;
  

  constructor(private climaService: ClimaService,
    private menuController: MenuController,) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }
  // pronostico.page.ts
  obtenerPronostico() {
    // Llama a una función en el servicio de clima para obtener datos del pronóstico.
    this.climaService.obtenerPronostico(this.ciudad)
      .then((response) => {
         // Cuando la solicitud se completa con éxito, se ejecuta esta función de devolución de llamada.
      // La respuesta (response) contiene los datos del pronóstico del clima.

      // Extrae la temperatura en Kelvin del objeto de respuesta.
        const temperaturaKelvin = response.data.main.temp;
        this.temperatura = (temperaturaKelvin - 273.15).toFixed(2); // Conversión de kelvin a grados Celsius
        
      })
      .catch((error) => {
      // Si la solicitud no se completa con éxito, se ejecuta esta función de devolución de llamada.
      // Registra un mensaje de error en la consola con información sobre el error.
        console.error('Error al obtener el pronóstico del clima:', error);
      });
  }

}
