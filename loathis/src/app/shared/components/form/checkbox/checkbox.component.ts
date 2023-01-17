import {Component, Input, ViewChild} from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  NG_VALUE_ACCESSOR
} from "@angular/forms";

@Component({
  selector: 'form-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CheckboxComponent,
      multi: true
    }
  ]
})

export class CheckboxComponent implements ControlValueAccessor {

  @Input() formControl: FormControl<any> | any;
  @Input() field!: string;
  @Input() label!: string;
  @Input() disabled!: boolean;
  @Input() required!: boolean;
  formControlName!: string;

  @ViewChild(FormControlDirective, {static: true})
  formControlDirective!: FormControlDirective;

  constructor(private controlContainer: ControlContainer) {
  }

  // get controlName with control
  get control() {
    if (this.controlContainer.control) return this.controlContainer.control.get(this.formControlName);
    return this.formControl
  }

  ngOnInit(): void {
    this.formControlName = this.field;
    this.formControl = new FormControl(this.formControlName)
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
