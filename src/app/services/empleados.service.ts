import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { empleadoModel } from '../models/empleado.model';
import { RespuestaEmpleadoModel } from '../models/respuesta-empleado.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private url='https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/ana'

  constructor(private http: HttpClient) { }

  crearEmpleado(empleado:empleadoModel):Observable<RespuestaEmpleadoModel>{
    return this.http.post<RespuestaEmpleadoModel>(this.url,empleado)

  }
}
