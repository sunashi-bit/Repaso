import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, MinLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamic-form',
  standalone: true,
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  templateUrl: './dinamicForm.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DinamicFormComponent {

  playlistForm!:FormGroup;
  newSong:FormControl= new FormControl('', Validators.required);

  constructor (private fb: FormBuilder){
    this.playlistForm=fb.group({
      name:['',[Validators.required, Validators.minLength(3)]],
    songs:this.fb.array([
      ['a Hard Day´s Night', Validators.required],
      ['Plastic Memory', Validators.required],
      ['Y.M.C.A', Validators.required]
    ])
    });
  }

  isValidControl(control: string){
    return this.playlistForm.controls[control].errors &&
    this.playlistForm.controls[control].touched
  }

  isValidInArray(formarray:FormArray, index:number){
    return formarray.controls[index].errors &&
    formarray.controls[index].touched
  }

  onDeleteSong(index:number): void{
    console.log(index);

    this.favoriteSongs.removeAt(0);
  }

  getFiledError(field:string){
    if(!this.playlistForm.controls[field]) return null;
    const errors = this.playlistForm.controls[field].errors ||{};

    for( const key of Object.keys(errors)){
      switch(key){
        case 'required':
        return 'Este Campo es requerido';
        case 'minlength':
          return 'Minimo 3 caracteres';
      }
    }
    return null;
  }

  addSong(){
    if(this.newSong.invalid) return;
    const newSong = this.newSong.value;
    this.favoriteSongs.push(
      this.fb.control(newSong, Validators.required)
    );
    this.newSong.reset();
  }

get favoriteSongs(){
  return this.playlistForm.get('songs') as FormArray
}


savePlaylist(){}

}
