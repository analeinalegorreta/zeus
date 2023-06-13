import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',

})
export class GrupoComponent implements OnInit {

  grupo : any []=[];

  constructor( private http:HttpClient) {
    {
      this.http.get(' https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/groups/analeinalegorretajulio')
      .subscribe((respuesta:any)=>{
        this.grupo=respuesta.data.groups;
        console.log( this.grupo);
        console.log(respuesta);
      })
     }
    }

  ngOnInit(): void {
  }

}
