import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-contador2',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './contador2.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contador2Component {
  @Input(
    {
      required:true
    })contadorN:number=0;


    Aumentar(){
this.contadorN++;
console.log('Si jala',this.contadorN);

    }
}
