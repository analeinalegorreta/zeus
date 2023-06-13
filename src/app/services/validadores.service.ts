import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  noLeina(control: FormControl): { [s: string]: boolean } {
    if (control.value?.toLowerCase() === 'leina') {
      return {
        noLeina: false
      }
    }
    return null;
  }

  noLegorreta(control: FormControl): { [s: string]: boolean } {
    if (control.value?.toLowerCase() === 'legorreta') {
      return {
        noLegorreta: false
      }
    }
    return null;
  }



  passwordsIguales(pass1Name: string, pass2Name: string) {
    return (FormGroup:FormGroup) => {
      const pass1Control=FormGroup.controls[pass1Name];
      const pass2Control=FormGroup.controls[pass2Name];

      if(pass1Control.value===pass2Control.value){
        pass2Control.setErrors(null);

      }else{
        pass2Control.setErrors({noesIgual:true})
      }

    }
  }




}
