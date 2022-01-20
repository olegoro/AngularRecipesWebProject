import { Directive, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpenedDropdown = false;

  @HostListener('click') click() {
    this.isOpenedDropdown = !this.isOpenedDropdown;
  }
}


