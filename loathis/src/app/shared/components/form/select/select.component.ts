import {Component, Input, ViewChild} from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {ControlContainer, FormControl, FormControlDirective, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'form-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
    providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectComponent,
      multi: true
    }
  ]
})
export class SelectComponent {

  @Input() formGroupClass: string = '';
  @Input() hintLabel!: string;
  @Input() color!: ThemePalette;
  @Input() field!: string;
  @Input() label!: string;
  @Input() placeHolder!: string;
  @Input() values!: string[];
  @Input() required!: boolean;
  @Input() formControl: FormControl<any> | any;
  @Input() formControlName!: string;
  @Input() help!: string;

    @ViewChild(FormControlDirective, {static: true})
  formControlDirective!: FormControlDirective;

  constructor(private controlContainer: ControlContainer) {
  }

  ngOnInit(): void {
    this.formControlName = this.field;
    this.formControl = new FormControl(this.formControlName)
  }

  // get controlName with control
  get control() {
    if (this.controlContainer.control) return this.controlContainer.control.get(this.formControlName);
    return this.formControl
  }

  // register value on touch
  registerOnTouched(fn: any): void {
    this.formControlDirective.valueAccessor?.registerOnTouched(fn);
  }

  // register value if change
  registerOnChange(fn: any): void {
    this.formControlDirective.valueAccessor?.registerOnChange(fn);
  }

  // write value of input on object
  writeValue(obj: any): void {
    this.formControlDirective.valueAccessor?.writeValue(obj);
  }

}
