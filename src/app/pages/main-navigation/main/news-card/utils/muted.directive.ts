import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[muted]'
})
export class MutedDirective {


    constructor(private el : ElementRef, private renderer : Renderer2) {
    this.renderer.setStyle(el.nativeElement, 'color', 'rgb(154, 154, 154)');    
    }

@HostBinding ('style.opacity') opacity:string;  
@HostListener('mouseenter') onMouse() {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
    this.opacity = '0.56';
}
@HostListener('mouseleave') afterMouse() {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'rgb(154, 154, 154)');
}
}