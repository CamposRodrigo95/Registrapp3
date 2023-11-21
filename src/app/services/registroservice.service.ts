import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ialumnos, IAlumno } from '../interfaces/ialumnos';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';



const USER_KEY ='my-usuarios';

@Injectable({
  providedIn: 'root'
})
export class RegistroserviceService {
  

  constructor(private http: HttpClient) { }
  
  GetAllUsers(): Observable<Ialumnos>{
    return this.http.get<Ialumnos>(`${environment.apiURL}/alumnos`);
  }

  GetUserById(codigo:any):Observable<Ialumnos>{
    return this.http.get<Ialumnos>(`${environment.apiURL}/alumnos/?correo=${codigo}`);
  }

  IsLoggedIn(){
    return sessionStorage.getItem('correo')!=null;
  }

  crearAlumno(newAlumno: IAlumno): Observable<IAlumno>{
    return this.http.post<Ialumnos>(`${environment.apiURL}/alumnos`, newAlumno)
  }

  BuscarAlumnoId(id:number):Observable<Ialumnos>{
    return this.http.get<Ialumnos>(`${environment.apiURL}/alumnos/?alid=${id}`);
  }

  ActualizarAlumno(alumno:any):Observable<Ialumnos>{
    return this.http.put<Ialumnos>(`${environment.apiURL}/alumnos/${alumno.id}`,alumno);
  }
   
}

