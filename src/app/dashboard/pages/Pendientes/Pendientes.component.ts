import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { EarringsComponent } from '../../components/Earrings/Earrings.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pendientes',
  standalone: true,
  imports: [
    CommonModule, RouterModule, EarringsComponent, ReactiveFormsModule
  ],
  templateUrl: './Pendientes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PendientesComponent {
  public formTareas!: FormGroup;
  private fb = new FormBuilder();

  public signal: any = signal([]);

  constructor(){
    this.createform();
  }

  createform(){
    this.formTareas = this.fb.group({
      titulo:[,[Validators.required, Validators.minLength(4)]],
      descripcion: [,[Validators.required, Validators.minLength(8)]],
    })
  }
  ValidaControl(control: string){
    return !!this.formTareas.get(control)?.errors && this.formTareas.get(control)?.touched;
  }
  ValidaTitulo(){
    return !!this.formTareas.get('titulo')?.errors?.['minlength'] && this.formTareas.get('titulo')?.touched;
  }
  ValidaDescripcion(){
    return !!this.formTareas.get('descripcion')?.errors?.['minlength'] && this.formTareas.get('descripcion')?.touched;
  }

  newTarea: FormControl = new FormControl('', Validators.required);

  saveTarea(){
    console.log(this.formTareas.value);
    const datos = [...this.signal(), this.formTareas.value];
    this.signal.set(datos);
  }

}
