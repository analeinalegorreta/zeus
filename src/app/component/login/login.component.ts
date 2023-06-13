import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ValidadoresService } from 'src/app/services/validadores.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  forma: FormGroup;

  constructor(private fb: FormBuilder,
    private validadores: ValidadoresService) {

    this.crearFormulario();

  }

  ngOnInit(): void {
  }

  get passwordInvalido() {
    let respuesta = this.forma.get('pass1')?.invalid && this.forma.get('pass1')?.touched
    return respuesta
  }

  get passwordInvalido2() {
    const pass1=this.forma.get('pass1').value;
    const pass2=this.forma.get('pass2').value;

    return (pass1===pass2)? false:true;
  }


  crearFormulario() {
    this.forma = this.fb.group({
       pass1:['',Validators.required, Validators.max(50)],
       pass2:['',Validators.required, Validators.max(50)],
    },
    {
      Validators:this.validadores.passwordsIguales('pass1','pass2')
    });
  }

  guardar(){


    console.log('guardar')
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
}
