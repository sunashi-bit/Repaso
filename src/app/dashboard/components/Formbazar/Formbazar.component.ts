import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import FormBazarComponent from '../../pages/formBazar/formBazar.component';

@Component({
  selector: 'app-formbazar',
  standalone: true,
  imports: [
    CommonModule, FormBazarComponent
  ],
  templateUrl: './Formbazar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormbazarComponent {
  @Input({required:true})product:any;

  constructor(){
    console.log(this.product);

  }
}
