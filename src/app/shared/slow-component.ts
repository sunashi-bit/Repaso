import { CommonModule, NgClass } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-slow',
    standalone: true,
    imports: [CommonModule],
    template:`
    <section [ngClass]="['w-full h-[600px]', clase]">
    SlowComponent
    </section>`
})
export class SlowComponent{
    @Input({required:true})clase!:String

    constructor(){
        const start=Date.now();
        while (Date.now()-start<3000){}
        console.log('SlowComponent')
    }
}