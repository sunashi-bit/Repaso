import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-quiz-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './QuizForm.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class QuizFormComponent {

  // Form Structure
  quizForm !: FormGroup;

  private FB = inject(FormBuilder);

  constructor(){
    this.quizForm = this.FB.group({
      quizQuestions: this.FB.array([])
    });

    const QuizNewForm = this.FB.group({
      pregunta: ['¿Qué son los Gases Nobles?', [Validators.required]],
      respuesta: ['Son todos aquellos elementos de la tabla periódica los cuales ...', [Validators.required]]
    });
    this.quizQuestions.push(QuizNewForm);
    const QuizNewForm2 = this.FB.group({
      pregunta: ['¿Como se identifica a un triangulo rectangulo?', [Validators.required]],
      respuesta: [null, [Validators.required]]
    });
    this.quizQuestions.push(QuizNewForm2);
  }
  question : FormControl = new FormControl('', [Validators.required, Validators.minLength(5)]);
  answer : FormControl = new FormControl('', [Validators.required]);

  // ArrayForm Interactions
  get quizQuestions() {
    return this.quizForm.controls["quizQuestions"] as FormArray;
  }

  addQuestion() {
    if(this.question.invalid || this.answer.invalid) {
      this.question.markAsTouched();
      this.answer.markAsTouched();
      return;
    }

    const newQuestion = this.question.value;
    const newAnswer = this.answer.value;

    const QuizNewForm = this.FB.group({
      pregunta: [newQuestion, [Validators.required]],
      respuesta: [newAnswer, [Validators.required]]
    });
    this.quizQuestions.push(QuizNewForm);

    this.question.reset()
    this.answer.reset()
  }

  onDelete(index:number){
    this.quizQuestions.removeAt(index);
  }


  // Error List

  validateCreator(input:FormControl){
    return !!input?.errors && input?.touched;
  }

  getFieldErrors(field:FormControl){
    if(!field) return null;

    const errors = field.errors || {};

    for (const key of Object.keys(errors)) {

      switch(key){
        case 'required':
            return '* Este campo es requerido'
        case 'minlength':
            return 'Minimo 5 caracteres'
      }
    }
    return null;
  }

  invalidArrayControl(formArray : FormArray, index : number){
    // let data = formArray.controls[index] as FormGroup;
    let data = this.quizQuestions.controls[index] as FormGroup;

    return !!data.controls['respuesta']?.errors;
  }

  onSubmit(){
    if(this.quizForm.invalid) return null;

    console.log(this.quizForm.value());
    return null;

  }

}
