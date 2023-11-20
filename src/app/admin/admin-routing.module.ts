import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { UsersManagementComponent } from './layout/components/users-management/users-management.component';
import { ProductManagementComponent } from './layout/components/product-management/product-management.component';
import { OrdersManagementComponent } from './layout/components/orders-management/orders-management.component';
import { StaticsComponent } from './layout/components/statics/statics.component';



@NgModule({
  imports: [RouterModule.forChild([
    {
      path:'' , component:LayoutComponent ,
      children:[
        {
          path:'users-management' , component:UsersManagementComponent
        },
        {
          path:'product-management' , component:ProductManagementComponent
        },
        {
          path:'orders-management' , component:OrdersManagementComponent
        },
        {
          path:'statics' , component:StaticsComponent
        }
      ]
    }
  ])],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
