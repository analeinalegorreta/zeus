import { Component, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(public usuarioService:UsuarioService) { }

  ngOnInit(): void {
  }


}
