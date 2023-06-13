import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidadoresService } from 'src/app/services/validadores.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  forma: FormGroup;
  mySwitch: boolean = false;

  tipoCombo = ['uno', 'dos', 'tres', 'cuatro'];
  selected = -1
  selectedIndex = -1

  constructor(private fb: FormBuilder,
    private validadores: ValidadoresService) {

    this.crearFormulario();


  }

  ngOnInit(): void {

  }

  selectItem(evento: any) {

  }

  selectItemLayout(evento: any) {
    
  }

  get tipoValido() {
    let respuesta = this.forma.get('tipo')?.invalid && this.forma.get('tipo')?.touched
    return respuesta
  }

  get inputInvalido() {
    return this.forma.get('nombre')?.value == '' && this.forma.get('nombre')?.touched
  }

  get nombreLeinaInvalido() {
    let variable = this.forma.get('nombre')

  

    if (variable.errors != null) {
      let variable2 = variable.errors['noLeina']
      console.log(variable2)
      if (variable2 != null && variable2 == false) {
        return true
      } else {
        return false
      }
    }
    else {
      return false
    }
  }

  get nombreLegorretaInvalido() {
    let variable = this.forma.get('nombre')


    if (variable.errors != null) {
      let variable2 = variable.errors['noLegorreta']
      console.log(variable2)
      if (variable2 != null && variable2 == false) {
        return true
      } else {
        return false
      }
    }
    else {
      return false
    }


    // return true
    // return this.forma.get('nombre')?.errors['noLeina']
  }

  get emailValido() {
    return this.forma.get('email')?.invalid && this.forma.get('email')?.touched
  }
  get telefonoValido() {
    return this.forma.get('telefono')?.invalid && this.forma.get('telefono')?.touched
  }

  get puestoValido() {
    return this.forma.get('puesto')?.invalid && this.forma.get('puesto')?.touched
  }

  get leyautValido() {
    return this.forma.get('layout')?.invalid && this.forma.get('layout')?.touched
  }

  // get pruebaValido2(){
  //   return this.forma.get('prueba2')?.invalid && this.forma.get('prueba2')?.touched
  // }

  // getvalidador(campo:string){
  //   return this.forma.get(campo)?.invalid && this.forma.get(campo)?.touched
  // }

  crearFormulario() {
    this.forma = this.fb.group({
      tipo: ['', [Validators.required, Validators.maxLength(50)]],
      nombre: ['', [Validators.required, Validators.maxLength(50), this.validadores.noLeina, this.validadores.noLegorreta]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+[.]+[a-z]{2,3}$')]],
      telefono: ['', [Validators.required, Validators.maxLength(10), Validators.pattern("^[0-9]*$"),]],
      puesto: ['', [Validators.required, Validators.maxLength(50)]],
      layout: ['', [Validators.required]],

      // prueba:['',Validators.required, Validators.max(50)],
      // prueba2:['',Validators.required, Validators.max(50)],
    });
  }




  crearListener() {
    this.mySwitch=!this.mySwitch
    console.log(this.mySwitch)

    if(this.mySwitch){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  guardar() {

    if (this.forma.invalid) {

      Object.values(this.forma.controls).forEach(control => {
        control.markAsTouched();
        //control.updateValueAndValidity()
        //console.log(this.forma.controls['nombre'].errors['noLeina'])
      })

    } else {
      this.crearFormulario()
    }


  }


  verificarValides() {
    return this.forma.invalid
  }

}