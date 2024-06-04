import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Contador2Component } from '../../contador2/contador2.component';
import { Contador3Component } from '../../contador3/contador3.component';


@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [
    CommonModule,Contador2Component, Contador3Component
  ],
  templateUrl: './contador.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContadorComponent {
  contadorNormal=0;
  public counterSignal=signal(0);
 }

