import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  templateUrl: './empleado.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class EmpleadoComponent {
  employees!:FormGroup;
  newEmployee:FormControl = new FormControl('', Validators.required);

  constructor (private fb:FormBuilder){
    this.employees=fb.group({
      name:['',[Validators.required, Validators.minLength(4)]],
      lastname:['',Validators.required],
      salary:['', Validators.required, Validators.max(3000)],
      email:['', Validators.required],
      position:['',Validators.required],

    employes:this.fb.array([
      this.fb.group({
        name: 'Jane',
        lastname: 'Smith',
        salary: 2000,
        email: 'janesmith@example.com',
        position: 'Assistant'
      }),
      this.fb.group({
        name: 'Michael',
        lastname: 'Johnson',
        salary: 2800,
        email: 'michaeljohnson@example.com',
        position: 'Supervisor'
      })
    ])
    });
  }

  getFiledError(field:string){
    if(!this.employees.controls[field]) return null;
    const errors = this.employees.controls[field].errors ||{};

    for( const key of Object.keys(errors)){
      switch(key){
        case 'required':
        return 'Este Campo es requerido';
        case 'minlength':
          return 'Minimo 4 caracteres';
      }
    }
    return null;
  }

  isValidControl(control: string){
    return this.employees.controls[control].errors &&
    this.employees.controls[control].touched
  }

  isValidInArray(formarray:FormArray, index:number){
    return formarray.controls[index].errors &&
    formarray.controls[index].touched
  }

  addEmployee(){
    if(this.newEmployee.invalid) return;
    const newEmployee = this.newEmployee.value;
    this.empleados.push(
      this.fb.control(newEmployee, Validators.required)
    );
    this.newEmployee.reset();
  }

  get empleados(){
    return this.employees.get('employes') as FormArray
  }

  saveEmployees(){}
}
