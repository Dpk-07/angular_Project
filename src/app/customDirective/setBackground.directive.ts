import { Directive, ElementRef ,OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[setBackground]',
})
export class SetBackground implements OnInit{

    private element:ElementRef;
    private renderer:Renderer2;
    constructor(element:ElementRef,renderer:Renderer2){
        this.element = element
        this.renderer = renderer;
    }

    ngOnInit(): void {
        // this.element.nativeElement.style.backgorundColor = '#36454f';
        // this.element.nativeElement.style.color = 'white';

        // now with the help of the renderer we are not directly apply the color to the element
        this.renderer.setStyle(this.element.nativeElement,"backgroundColor","36454f");
        this.renderer.setStyle(this.element.nativeElement,"color","white");
    }
}