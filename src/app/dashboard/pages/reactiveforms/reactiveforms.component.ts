import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reaactive-froms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactiveforms.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ReaactiveFromsComponent {
  private fb = inject(FormBuilder);
  formFood!: FormGroup;
  categories = ['Japonesa', 'Coreana', 'Mexicana', 'Italiana'];

  constructor(/* private fb = inject(FormBuilder) */) {
    this.formFood = this.fb.group({
      name: [, Validators.required],
      description: [, [Validators.required, Validators.maxLength(50)]],
      urlImg: [, [Validators.required]],
      price: [, Validators.required],
      categoria: [, Validators.required],
    });
  }

  validaControl(control:string){
    return !!this.formFood.get(control)?.errors && this.formFood.get(control)?.touched;
  }

  validaDescription(){
    console.log('validadescription',
    this.formFood.get('description')?.errors?.['maxlength'])

  }

  saveFood() {
    console.log(this.formFood.get('description')?.errors);

    if (this.formFood.invalid) return;
  }
}
