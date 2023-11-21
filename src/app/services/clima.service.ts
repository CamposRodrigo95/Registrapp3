import { Injectable } from '@angular/core';
import axios  from 'axios';
//es una biblioteca JavaScript que se utiliza para realizar solicitudes HTTP desde el navegador o desde Node.js.
@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  private apiKey = '7cbffdaa6f11b77c30bd55d48fc5d9f8';

  constructor() { }

  obtenerPronostico(ciudad: string) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${this.apiKey}`;
    console.log('URL de solicitud:', url);
    return axios.get(url);
  }
}
