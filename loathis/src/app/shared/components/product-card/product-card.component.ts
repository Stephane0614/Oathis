import { Component, Input } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  
  products!: Product[];

  ngOnInit(){
    console.log(this.products);
  }
  
}

