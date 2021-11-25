import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'div',
})
export class LinkDirective {
  constructor(private elRef: ElementRef) {
    console.log(this.elRef);
  }
}
