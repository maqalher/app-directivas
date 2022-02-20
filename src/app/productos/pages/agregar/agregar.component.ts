import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  // colorQueQuiero: string = 'green';
  texto1: string = 'Algo';
  color: string = 'blue';

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required]
  })

  constructor( private fb:FormBuilder ) { }

  tieneError(campo:string):boolean {
    return this.miFormulario.get(campo)?.invalid || false;
  }

  cambarValor() {
    this.texto1 = 'd' + Math.random() * (1 - 90) + 1;

  }

  cambiarColor():string {
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    return this.color = color;
  }

}
