import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Rutas
import{APP_ROUTING} from './app.routes';

//Servicios
import{HeroinasService} from './servicios/heroinas.service';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { HeroinasComponent } from './component/heroinas/heroinas.component';
import { HeroeComponent } from './component/heroe/heroe.component';
import { GrupoComponent } from './component/grupo/grupo.component';
import { FormularioComponent } from './component/formulario/formulario.component';
import { OnlyNumber } from './directive/onlyNumber';
import { LoginComponent } from './component/login/login.component';
import { PagEmPipe } from './pag-em.pipe';
import { FormuDependComponent } from './component/formu-depend/formu-depend.component';
import { UsuariosModule } from './usuarios/usuarios.module';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroinasComponent,
    HeroeComponent,
    GrupoComponent,
    FormularioComponent,
    OnlyNumber,
    LoginComponent,
    PagEmPipe,
    FormuDependComponent

  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UsuariosModule
  ],
  providers: [
    HeroinasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
