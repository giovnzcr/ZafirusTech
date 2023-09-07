import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { CartItemsModule } from '../cart-items/cart-items.module';
import { CartService } from '../services/cart.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    CartItemsModule
  ],
  declarations: [HomePage],
 
})
export class HomePageModule {}
