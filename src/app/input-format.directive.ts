 import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('format') format;
  constructor(private elementRef: ElementRef) { }

  @HostListener('blur') onBlur() {
    let value: string = this.elementRef.nativeElement.value;
    if (this.format == 'lowercase') {
      this.elementRef.nativeElement.value = value.toLowerCase();
    } else {
      this.elementRef.nativeElement.value = value.toUpperCase();
    }
  }

}
