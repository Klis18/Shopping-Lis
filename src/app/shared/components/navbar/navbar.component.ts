import { Component, OnChanges, OnInit, signal, SimpleChanges, WritableSignal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ShoppingCarService } from '../../../shopping/services/shopping-car.service';

@Component({
  selector: 'shared-navbar',
  imports: [
    MatIconModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  
  cantidadProductosCarrito: WritableSignal<number> = signal(0);

  constructor(private shoppingCarService:ShoppingCarService){}

  ngOnInit(): void {
    this.cantidadProductosCarrito = this.shoppingCarService.getQuantityProducts();
  }
  


  

}
