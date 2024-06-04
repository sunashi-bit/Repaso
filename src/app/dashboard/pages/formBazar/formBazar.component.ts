import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormbazarComponent } from '../../components/Formbazar/Formbazar.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-form-bazar',
  standalone: true,
  imports: [
    CommonModule,RouterModule,FormbazarComponent,ReactiveFormsModule
  ],
  templateUrl: './formBazar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FormBazarComponent {
  public formBazar!: FormGroup;
  private fb = new FormBuilder();

  public signal: any = signal([]);

  constructor(){
    this.createform();
  }

  createform(){
    this.formBazar = this.fb.group({
      name:[,[Validators.required, Validators.minLength(5)]],
      urlimg:[,[Validators.required]],
      precio:[,[Validators.required, Validators.max(0)]],
      precioVenta:[,[Validators.required]]
    })
  }

  validate(input: string) {
    return !!this.formBazar.get(input)?.errors && this.formBazar.get(input)?.touched;
  }
  getFieldErrors(field: string) {
    if (!field) return null;

    const errors = this.formBazar.get(field)?.errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return '* Este campo es requerido'
        case 'minlength':
          return 'Minimo 5 caracteres'
      }
    }
    return null;
  }

newProducto: FormControl = new FormControl('', Validators.required);

saveProducto(){
  console.log(this.formBazar.value);
  const datos = [...this.signal(), this.formBazar.value];
  this.signal.set(datos);
}

}

