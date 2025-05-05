import { Component, input, NgModule} from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { ShoppingCarService } from '../../../shopping/services/shopping-car.service';
import { ShoppingProduct } from '../../../shopping/interfaces/shopping-product.interface';
import { FormsModule } from '@angular/forms';
import { ImagePipe } from '../../pipes/image-pipe.pipe';


@Component({
  selector: 'app-product-item',
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    ImagePipe
  ],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {

  productItem = input.required<Product>();

  cantidadProductos: number = 1;

  constructor(private shoppingCarService: ShoppingCarService){}

  addProductShopping(product: Product){
    const title = product.title;
    const quantity = this.cantidadProductos;
    const price = product.price;
    const shoppingProducts = {productName:title, quantity:quantity, price:price} as ShoppingProduct;
    this.shoppingCarService.addProductsCart(shoppingProducts);
    this.shoppingCarService.getProductsCar();
  }
}
