import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { log } from 'console';


@Component({
  selector: 'app-ropa',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ropa.component.html',
  styleUrl: './ropa.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RopaComponent {
  private fb = inject(FormBuilder);
  formRopa!: FormGroup;
  clasificacion = ['Bebe', 'Niño', 'Juvenil', 'Adulto'];

  constructor(/* private fb = inject(FormBuilder) */) {
    this.formRopa = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.max(5000)]],
      description: ['', [Validators.required, Validators.minLength(20)]],
      stock: [null, [Validators.required, Validators.min(0), Validators.max(500)]],
      marca: ['', Validators.required],
      clasificacion: ['', Validators.required],
    });
  }

  validaControl(control: string) {
    return !!this.formRopa.get(control)?.errors && this.formRopa.get(control)?.touched;
  }

  validaDescription() {
    console.log('validadescription', this.formRopa.get('description')?.errors?.['minlength']);
  }

  saveRopa() {
    if (this.formRopa.invalid){
      this.formRopa.markAllAsTouched();
    } else{
      console.log(this.formRopa.value);
      this.formRopa.reset();

    }
    console.log(this.formRopa.get('description')?.errors);

    if (this.formRopa.invalid) return;
  }

  validaStock(){
    return !!this.formRopa.get('stock')?.errors?.['max']
  }

  validaPrice(){
    return !!this.formRopa.get('price')?.errors?.['max']
  }
}

