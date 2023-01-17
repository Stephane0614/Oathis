import {Component, Input, ViewChild} from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  NG_VALUE_ACCESSOR
} from "@angular/forms";
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'form-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {

  isPwd!: boolean;
  hide!: boolean;
  search!:boolean;
  formControlName!: string;

  
  @Input() formGroupClass: string = '';
  @Input() hintLabel!: string;
  @Input() color!: ThemePalette;
  @Input() type!: string;
  @Input() field!: string;
  @Input() label!: string;
  @Input() required!: boolean
  @Input() formControl: FormControl<any> | any;
  @Input() iconPrefix!: string;
  @Input() iconSuffix!: string;
  @Input() help!: string;

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
    this.type = 'test';
    this.isPwd = this.type == 'password';
    this.hide = this.isPwd;
    this.search = this.field == 'search';
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

  viewPwd() {
    if (this.type === "password") {
      this.type = "text"
      this.hide = false;
    } else {
      this.type = "password";
      this.hide = true;
    }
  }
}


