import { Injectable } from '@angular/core';
import { ShoppingProduct } from '../interfaces/shopping-product.interface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCarService {

  shoppingCar: ShoppingProduct[] = [];

  constructor() { }

  addProductsCart(product: ShoppingProduct){
    this.shoppingCar.push(product);
    console.log('producto agregado');
  }

  getProductsCar():ShoppingProduct[]{
    console.log(this.shoppingCar);
    return this.shoppingCar;
  }
}
