import { Component, Input, OnInit } from '@angular/core';
import { cartItem } from './cart-item.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss'],
})
export class CartItemsComponent  implements OnInit {

  @Input({required : true}) cartItem:cartItem | undefined;
  @Input() isForDelete:boolean = false;
  @Input() index : number = 0
  
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {}

  onAddToCart(item:cartItem | undefined):void {
    this.cartService.addItemToCart(item as cartItem);
  }
  onDeleteItemFromCart(index:number):void {
    this.cartService.removeItemFromCart(index);

  }

}
