import { AbstractControl, FormControl, ValidationErrors } from "@angular/forms";
import { Observable, of } from "rxjs";

export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
export const  fullname: string = "([a-z0-9]+) ([a-z0-9]+)";


export function renji (control:AbstractControl):
ValidationErrors | null
{
  const user = control?.get('username')?.value;
  console.log(user);
  if(user === 'renji'){
    console.log('esta mal');
    control.get('username')?.setErrors({"mierror" : true})
  }
  return (null);
}



export function passwordValidator(control: AbstractControl):
ValidationErrors | null
{
  const password = control?.get('password')?.value;
  const confirma = control?.get('confirmepassword')?.value;
  if(confirma !== password){
    //console.log('La contraseña no es la misma');
    control.get('confirmepassword')?.setErrors({"errorPass" : true})
  }
  return (null);
}


const matriculas = ['UTTI212004','UTTI212003','UTTI212005','UTTI212003','UTTI212009']

export function matricula (control:AbstractControl):
ValidationErrors | null
{
  const matri = control?.get('matricula')?.value;
  for(let i in matriculas){
    if(matri === matriculas[i]){
      console.log('esta mal 333');
      control.get('matricula')?.setErrors({"mierror2" : true})
    }
  }
  return (null);
}
