import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { cartItem } from '../cart-items/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {


private addedCartItems = new BehaviorSubject<cartItem[]>([]);

  constructor() { }


  addItemToCart(item:cartItem):void {
    this.addedCartItems.next([...this.addedCartItems.getValue(),...[item]])
  }
  removeItemFromCart(index: number) {
    const roomArr = [...this.addedCartItems.getValue()];
  
    roomArr.splice(index, 1); 
    this.addedCartItems.next(roomArr);
  }

  getCartItems(): Observable<cartItem[]> {
    return this.addedCartItems.asObservable();
  }
}
