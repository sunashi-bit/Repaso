import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import PendientesComponent from '../../pages/Pendientes/Pendientes.component';

@Component({
  selector: 'app-earrings',
  standalone: true,
  imports: [
    CommonModule, PendientesComponent
  ],
  templateUrl: './Earrings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EarringsComponent {
  @Input({required:true})pendiente:any;

  constructor(){
    console.log(this.pendiente);
  }
}
