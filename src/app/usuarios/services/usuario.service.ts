import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  public character: Character[] = [{
    id:uuid(),
    name: 'Ana',
    edad: 21
  }, {
    id:uuid(),
    name: 'Juan',
    edad: 19
  }, {
    id:uuid(),
    name: 'Migue',
    edad: 33
  }];

  onNewCharacter(character: Character):void {
    const newCharacter:Character={id: uuid(), ...character};
    this.character.push(newCharacter)
  }


  // onDeeleteCaracter(index:number){
  //   this.character.splice(index,1)
  deleteCharacterById(id:string){
    this.character=this.character.filter(character=>character.id !== id);
  }


  constructor() { }
}
