import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-microsoft-component',
  templateUrl: './microsoft.component.html',
  styleUrls: ['./microsoft.component.scss']
})
export class MicrosoftComponent {

  @Input() title !: string;
  @Input() subTitle!: string;
  @Input() image!: string;
  @Input() description!: string;
  @Input() cardClass!: string;
  @Input() imgClass!:string;

  onInit(): void {

  }
}
