import { Directive, ElementRef, HostListener, OnInit } from "@angular/core";

@Directive({
    selector: "[appBasicHiglight]"
})

export class BasicHiglightDirective implements OnInit{
    constructor(private elementRef: ElementRef){}

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = "teal";
    }

    @HostListener("mouseenter") mousewow(event: Event){
        this.elementRef.nativeElement.style.color = "white";
    }

    @HostListener("mouseleave") mousephew(event: Event){
        this.elementRef.nativeElement.style.color = "red";
    }
}