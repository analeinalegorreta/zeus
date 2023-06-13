import { Pipe, PipeTransform } from '@angular/core';
import { empleadoModel } from './models/empleado.model';

@Pipe({
  name: 'pagEm'
})
export class PagEmPipe implements PipeTransform {

  transform(empleados: empleadoModel[], page:number=0,search:string=''): empleadoModel[] {
    
    if(search.length===0)
   
    return empleados.slice(page, page+10);

    const filterEmpleados=empleados.filter(emple=>emple.name.includes(search));
    return filterEmpleados.slice(page, page+10);

  }

}
