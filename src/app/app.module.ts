import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { FiltersPipe } from './filter/filters.pipe';
import { LoginComponent } from './component/login/login.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { SignupComponent } from './component/signup/signup.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { DetailproductComponent } from './component/detailproduct/detailproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    FiltersPipe,
    LoginComponent,
    SignupComponent,
    CheckoutComponent,
    DetailproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
