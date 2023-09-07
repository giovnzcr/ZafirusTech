import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { cartItem } from '../cart-items/cart-item.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss'],
})
export class CartDetailComponent  implements OnInit {

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {}

  cartItems$():Observable<cartItem[]>{
    return this.cartService.getCartItems();
  }
  cartItemsTotal$(): Observable<number> { debugger
    return this.cartItems$().pipe(
      map(item => item.map(
        itemTotal => itemTotal.itemPrice
      )),
      map(prices => prices.reduce(
        (totalPrice,ItemPrice) =>{
          return totalPrice = totalPrice + ItemPrice
        },0
      ))
    )
    
  }

}
