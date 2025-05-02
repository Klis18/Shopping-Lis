import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interface';
import { ProductItemComponent } from '../../components/product-item/product-item.component';

@Component({
  selector: 'app-product-page',
  imports: [
    ProductItemComponent
  ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export default class ProductPageComponent implements OnInit{

  productsList: Product[] = [];

  constructor(private productsService: ProductsService){}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(x =>
    {
      this.productsList = x
      console.log(this.productsList);
    });
  }

}
