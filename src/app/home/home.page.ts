import { Component, OnInit, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';


import { DataService, Message } from '../services/data.service';
import { cartItem } from '../cart-items/cart-item.model';
import { CartService } from '../services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  getCartItems$: Observable<cartItem[]> = new Observable<cartItem[]>();

  private data = inject(DataService);
  constructor(
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.getCartItemsObservable();
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  getCartItems(): cartItem[] {
    return this.data.getCartItems();
  }
  getCartItemsObservable():void {
    this.getCartItems$ =  this.cartService.getCartItems();

  }
}
