import {Component, Input, ViewChild} from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  NG_VALUE_ACCESSOR
} from "@angular/forms";
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';

@Component({
  selector: 'form-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DateComponent,
      multi: true
    }
  ]
})
export class DateComponent implements ControlValueAccessor {

  @Input() formGroupClass: string = '';
  @Input() hintLabel!: string;
  @Input() color!: ThemePalette;
  @Input() type!: string;
  @Input() field!: string;
  @Input() label!: string;
  @Input() required!: boolean
  @Input() formControl: FormControl<any> | any;
  formControlName!: string;
  @Input() colorCalendar!: ThemePalette;

  dateFormat!: string;

  @ViewChild(FormControlDirective, {static: true})
  formControlDirective!: FormControlDirective;

  constructor(private controlContainer: ControlContainer) {
  }

  // get controlName with control
  get control() {
    if (this.controlContainer.control) return this.controlContainer.control.get(this.formControlName);
    return this.formControl
  }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view === "month") {
      const date = cellDate.getDay();
      return date !== 0 && date !== 6 ? 'sunday' : '';
    }
    return '';
  }

  ngOnInit(): void {
    this.formControlName = this.field;
    this.formControl = new FormControl(this.formControlName)
    this.dateFormat = 'JJ/MM/AAAA';
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
