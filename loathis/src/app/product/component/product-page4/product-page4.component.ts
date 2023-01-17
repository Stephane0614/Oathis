import { Component } from '@angular/core';

@Component({
  selector: 'app-product-page4',
  templateUrl: './product-page4.component.html',
  styleUrls: ['./product-page4.component.scss']
})
export class ProductPage4Component {

  promos!:any;

  ngOnInit(){
    this.promos = {
      name : 'Playstation 4 edition spider',
      image: "assets/page_accueil/ps4spiderman.jpg",
      description: "ps4 spider man edition",
      price: 499.99,
    }
  }
}
