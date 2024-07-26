import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./component/home/home.component";
import { AboutComponent } from "./component/about/about.component";
import { HeroinasComponent } from "./component/heroinas/heroinas.component";
import { HeroeComponent } from "./component/heroe/heroe.component";
import { FormularioComponent } from "./component/formulario/formulario.component";
import { LoginComponent } from "./component/login/login.component";
import { FormuDependComponent } from "./component/formu-depend/formu-depend.component";
import { MainPageComponent } from "./usuarios/pages/main-page/main-page.component";



const APP_ROUTES: Routes=[
{path:'home', component: HomeComponent},
{path:'about', component: AboutComponent},
{path:'heroinas', component: HeroinasComponent},
{path:'formulario', component: FormularioComponent},
{path:'login', component: LoginComponent},
{path:'heroe/:id', component: HeroeComponent},
{path:'formuDepen', component: FormuDependComponent},
{path:'componentes', component: MainPageComponent},

{path:'**', pathMatch: 'full', redirectTo:'home'},


];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
