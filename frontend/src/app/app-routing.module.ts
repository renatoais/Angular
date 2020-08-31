import { NgModule, Component } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component'
import { ProductCrudComponent } from './views/product-crud/product-crud.component'
import { CustomerComponent } from  './views/customer/customer.component'
import { OrderComponent } from './views/order/order.component'


const routes: Routes = [{
    path: "",
    component: HomeComponent
},
{
    path :"products",
    component: ProductCrudComponent
},
{
  path :"customer",
  component: CustomerComponent
},
{
  path :"order",
  component: OrderComponent
}]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
