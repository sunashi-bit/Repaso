import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FastComponent } from '../../../../shared/fast-component';

@Component({
    selector: 'app-defel-option',
    standalone: true,
    imports: [
        CommonModule,FastComponent
    ],
    templateUrl: './defel-option.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DefelOptionComponent { }
