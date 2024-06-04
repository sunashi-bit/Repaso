import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-control-flow',
    standalone: true,
    imports: [CommonModule,],
    templateUrl: './control-flow.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ControlFlowComponent {
    verContent = false;
    changeContent() {
        this.verContent = !this.verContent;
    }

    calificacion: number = 60;

    songs = [
        'The Nigth Before',
        'Save Your Tears',
        'Love Of My Life',
        'Jealous Guy',
        'Lucy In The Sky With Diamonds'
    ];

    antojitos=[
        'tlayudas',
        'garnachas',
        'memelitas',
        'molotes',
        'patas de pollo',
        'molotes'
    ];

    antojitos2=[
        

    ]
}
