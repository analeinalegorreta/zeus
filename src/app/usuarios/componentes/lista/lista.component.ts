import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input()
  public charactersList: Character[] = [{

    name: 'Jimi',
    edad: 10
  }];

  @Output()
  public onIndex: EventEmitter<string> = new EventEmitter();

  onDeeleteCharacter(id?: string): void {
    if(!id)return;
    this.onIndex.emit(id)
  }













  constructor() { }

  ngOnInit(): void {
  }

}
