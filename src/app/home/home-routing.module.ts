import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { CartDetailComponent } from '../cart-detail/cart-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path:'detail',
    component: CartDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
