import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemsComponent } from './cart-items.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CartService } from '../services/cart.service';
import { CartDetailComponent } from '../cart-detail/cart-detail.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CartItemsComponent,CartDetailComponent],
  exports: [CartItemsComponent,CartDetailComponent],
  imports: [
    CommonModule, FormsModule, IonicModule,RouterModule
  ],
 
})
export class CartItemsModule { }
