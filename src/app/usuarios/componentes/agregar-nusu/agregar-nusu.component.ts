import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-agregar-n-usu',
  templateUrl: './agregar-nusu.component.html',
  styleUrls: ['./agregar-nusu.component.css']
})
export class AgregarNusuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  public onNewCharacter:EventEmitter<Character>=new EventEmitter();

  public characterNuevo:Character={
    name:'',
    edad:0
  };


  emitCharacter(){
    // debugger

    if(this.characterNuevo.name.length===0)return;
    this.onNewCharacter.emit(this.characterNuevo)
    this.characterNuevo={name:'', edad:0};

  }
}
