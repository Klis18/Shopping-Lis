import { Injectable, signal, WritableSignal } from '@angular/core';
import { ShoppingProduct } from '../interfaces/shopping-product.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCarService {

  shoppingCar: ShoppingProduct[] = [];

  quantityShoppingCar = signal<number>(0);

  constructor() { }

  addProductsCart(product: ShoppingProduct){
    this.shoppingCar.push(product);
    const currentProductsCar = this.shoppingCar.length;
    this.quantityShoppingCar.set(currentProductsCar);
    console.log('producto agregado');
  }

  getProductsCar():ShoppingProduct[]{
    console.log(this.shoppingCar);
    return this.shoppingCar;
  }

  getQuantityProducts(){
    return this.quantityShoppingCar;
  }
  // getQuantityProducts(): Observable<number>{
  //   const cantidadProductos = this.shoppingCar.length;
  //   return cantidadProductos;
  // }
}
