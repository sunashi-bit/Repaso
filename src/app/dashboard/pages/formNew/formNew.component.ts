import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule, Validators } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule, MinLengthValidator, FormArray,  } from '@angular/forms';
import { emailPattern, fullname,matricula,passwordValidator,renji, } from '../formNew/common.validators';

@Component({
  selector: 'app-form-new',
  standalone: true,
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  templateUrl: './formNew.component.html',
  styleUrls: ['./formNew.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FormNewComponent {
  formUser !: FormGroup;

  private fb = inject(FormBuilder);



  constructor() {

    this.formUser = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(fullname)]],
      email: ['', [Validators.required, Validators.pattern(emailPattern)]],
      password: ['', Validators.required],
      confirmepassword: ['', Validators.required],
      username: ['', [Validators.required]],
      matricula: ['', [Validators.required]],
    }, { validators: [renji,matricula,passwordValidator] }
    );
  }


  validate(input: string) {
    return !!this.formUser.get(input)?.errors && this.formUser.get(input)?.touched;
  }


  getFieldErrors(field: string) {
    if (!field) return null;

    const errors = this.formUser.get(field)?.errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return '* Este campo es requerido'
        case 'minlength':
          return 'Minimo 5 caracteres'
        case 'mierror':
          return 'Este usuario no es valido'
        case 'mierror2':
          return 'Esta matricula no es valida'
        case 'errorPass':
          return 'La contraseñas no coinciden'
      }
    }
    return null;
  }
}
