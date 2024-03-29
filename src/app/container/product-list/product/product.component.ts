import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()
  product:Product;
  // product:{
  //   id: number,
  //   title: string,
  //   description: string,
  //   price: number,
  //   discountPercentage: number,
  //   rating: number,
  //   stock: number,
  //   inStock:boolean,
  //   brand: string,
  //   category: string,
  //   thumbnail: string,
  //   images: string[]
  // }
}
