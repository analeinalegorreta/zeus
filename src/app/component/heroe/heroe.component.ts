import { Component  } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { HeroinasService  } from '../../servicios/heroinas.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',

})
export class HeroeComponent  {

  heroe:any={};

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroinasService: HeroinasService
  ) {
    this.activatedRoute.params.subscribe(params=>{
     this.heroe=this._heroinasService.getHeroe(params['id']);
    })
   }


}
