import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-new-page',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './new page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NewPageComponent {
  verContent = false;
    changeContent() {
        this.verContent = !this.verContent;
    }

    calificacion: number = 10;

    beatles = [
        'Here Comes The Sun',
        'Love me Do',
        'Sgt. Peppers Lonely Hearts Club Band',
        'Let it Be',
        'Lucy In The Sky With Diamonds'
    ];

    albumes=[
        'Please Please Me',
        'With The Beatles',
        'A Hard Day´s Night ',
        'Beatles For Sale',
        'Help',
        'Rubber soul',
        'Revolver',
        'Sgt. Pepper´s Lonenly Hearts Club Band',
        'Magical Mistery tour',
        'The Beatles(White Album)',
        'Yellow Submarine',
        'Let It Be',
        'Abbey Road',
        'Past Masters Vol. 1 & 2',
        'Anthology 1, 2 & 3'
    ];

    Singles=[
        

    ]
}
