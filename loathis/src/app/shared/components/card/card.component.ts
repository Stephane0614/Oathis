import {Component, Input} from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() title !: string;
  @Input() subTitle!: string;
  @Input() image!: string;
  @Input() description!: string;
  @Input() cardClass!: string;
  @Input() imgClass!:string;
  @Input() titleClass!:string;
  @Input() path!:string;

  onInit(): void {

  }
}
