import { Component, OnInit } from '@angular/core';
import { HeroinasService, Heroina } from '../../servicios/heroinas.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-heroinas',
  templateUrl: './heroinas.component.html',

})
export class HeroinasComponent implements OnInit {

  empleados: any[] = [];
  public page: number = 0;
  public search: string = '';
  public totalPages: number = 0;
  public totalPagesBooton: number = 0;
  public numbers: any[] = [];
  public status: boolean = false;
  public propiedades: any = {
    color: true
  }
  public indx: number = 0;

  constructor(private http: HttpClient) {
    this.http.get('https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/ana')
      .subscribe((respuesta: any) => {
        this.empleados = respuesta.data.employees;

        this.totalPages = this.empleados.length / 10
        for (let i = 1; i <= this.totalPages + 1; i++) {
          let json = {
            id: i,
            seleccionado: false
          }
          this.numbers.push(json);

        }

        console.log(this.numbers);
      })
  }

  ngOnInit(): void {

  }


  nextPage() {
    this.page += 10;
  }

  prevPage() {
    if (this.page > 0) {
      this.page -= 10;
    }

  }

  clickButton(idx) {
    this.indx = idx
    this.totalPagesBooton = idx * 10
    this.page = this.totalPagesBooton

    idx++
    for (let a = 0; a < this.numbers.length; a++) {

      this.numbers[a].seleccionado = false

    }


    for (let a = 0; a < this.numbers.length; a++) {
      if (this.numbers[a].id == idx) {
        this.numbers[a].seleccionado = true
        break
      }
    }

  }


  onSearchEmpleado(search: string) {
    this.page = 0;
    this.search = search;

  }






}
