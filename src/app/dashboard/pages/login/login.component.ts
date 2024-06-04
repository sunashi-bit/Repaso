import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';
import { AuthServiceService } from '../../../services/authService.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginComponent {
  loginForm !: FormGroup;

  private FB = inject(FormBuilder);

  constructor(
    private auth : AuthServiceService
  ){
    this.loginForm = this.FB.group({
      email:[
        null,
        [Validators.required]
      ],
      password : [
        null,
        [Validators.required, Validators.minLength(8)]
      ],
    });
  }

  onSubmit(){
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
      return;
    }else{
      this.auth.Login(this.loginForm.value)
      .subscribe(
        {
          next:(res:any)=>{
            console.log('Welcome',res);
          },
          error:(err:any)=>{
            console.log('Access Denied',err);
          }
        }
      );
      
    }
  }
}
