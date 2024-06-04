import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-contador3',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './contador3.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contador3Component {
  @Input({required:true}) mySignal!:any;
  aumentar(){
    this.mySignal.set(this.mySignal()+1);
    console.log('working',this.mySignal);
  }
}
