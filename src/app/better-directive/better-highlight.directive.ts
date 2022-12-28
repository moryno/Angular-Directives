import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = "transparent";
  @Input() highlightedColor: string = "blue";

  @HostBinding("style.backgroundColor") backgroundColor: string;


  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
  //  this.renderer.setStyle(this.elRef.nativeElement, "background-color", "yellow") 
  this.backgroundColor = this.defaultColor 
  }

 

  @HostListener("mouseenter") mouseover(event: Event){
    this.backgroundColor = this.highlightedColor;
  }

  @HostListener("mouseleave") mouseleave(event: Event){
    this.backgroundColor = this.defaultColor;
  }

}
