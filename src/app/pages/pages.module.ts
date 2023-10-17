import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarListComponent } from './components/navbar-list/navbar-list.component';
import { TranslocoRootModule } from '../transloco-root.module';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccountComponent } from './components/account/account.component';
import { UsercontactComponent } from './components/account/usercontact/usercontact.component';
import { UserinfoComponent } from './components/account/userinfo/userinfo.component';
import { UserpasswordComponent } from './components/account/userpassword/userpassword.component';
import { SupportComponent } from './components/support/support.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductComponent } from './components/product/product.component';
import { CardComponent } from './components/product/card/card.component';
import { CardDetailComponent } from './components/product/card-detail/card-detail.component';
import { CardElementComponent } from './components/product/card-element/card-element.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/main/login/login.component';
import { RegisterComponent } from './components/main/register/register.component';
import { ResetpasswordComponent } from './components/main/resetpassword/resetpassword.component';@NgModule({
  declarations: [

    NavbarListComponent,
     AboutComponent,
     FooterComponent,
     AccountComponent,
     UsercontactComponent,
     UserinfoComponent,
     UserpasswordComponent,
     SupportComponent,
     FavoritesComponent,
     OrdersComponent,
     ProductComponent,
     CardComponent,
     CardDetailComponent,
     CardElementComponent,
     MainComponent,
     LoginComponent,
     RegisterComponent,
     ResetpasswordComponent
  ],
  imports: [
    CommonModule,
    TranslocoRootModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  exports:[
    NavbarListComponent,
    AboutComponent,
    FooterComponent,
    AccountComponent,
    SupportComponent,
    FavoritesComponent,
    OrdersComponent,
    ProductComponent,
    MainComponent
  ]
})
export class PagesModule { }
