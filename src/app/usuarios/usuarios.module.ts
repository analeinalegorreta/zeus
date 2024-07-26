import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { AgregarNusuComponent } from './componentes/agregar-nusu/agregar-nusu.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListaComponent,
    AgregarNusuComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class UsuariosModule { }
