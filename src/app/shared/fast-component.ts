import { CommonModule, NgClass } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-fast',
    standalone: true,
    imports: [CommonModule],
    template:`
    <section [ngClass]="['w-full h-[600px]', clase]">
    <<ng-content></ng-content>
    </section>`
})
export class FastComponent{
    @Input({required:true})clase!:String

    constructor(){
        const start=Date.now();
       // while (Date.now()-start<3000){}
        console.log('SlowComponent')
    }
}