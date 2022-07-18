import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './components/auth/auth-home/auth-home.component';
import { CartHomeComponent } from './components/cart/cart-home/cart-home.component';
import { CategoryHomeComponent } from './components/category/category-home/category-home.component';
import { NavbarHomeComponent } from './components/nav-bar/navbar-home/navbar-home.component';
import { HttpClientModule} from '@angular/common/http';
import { ProductHomeComponent } from './components/product/product-home/product-home.component';
import { ReviewComponent } from './components/review/review.component';



@NgModule({
  declarations: [
    AppComponent,
    CartHomeComponent,
    CategoryHomeComponent,
    NavbarHomeComponent,
    ProductHomeComponent,
    ReviewComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
