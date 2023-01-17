import {Component, Input, ViewChild} from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  NG_VALUE_ACCESSOR
} from "@angular/forms";

@Component({
  selector: 'form-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
    providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RadioComponent,
      multi: true
    }
  ]
})
export class RadioComponent implements ControlValueAccessor {

 @Input() groupName!: string;
  @Input() groupLabel!: string;
  @Input() field!: string;
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
