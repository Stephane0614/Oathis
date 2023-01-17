import { Component } from '@angular/core';
import {Product} from "../../../core/models/product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products!: Product[];
  name!: string;
  image!: string;
  description!: string;
  price!: number;
  isNew!: boolean;
}