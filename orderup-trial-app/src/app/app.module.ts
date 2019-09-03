import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent, HomeService, AngularHomeComponent } from './home/index';
import { NavigationComponent, LeftNavigationComponent, NavigationService } from './navigation/index';
import { FooterComponent, LayoutService} from './layout/index';
import { CartComponent, CartService } from './cart/index';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { PairsPipe} from './pipes/index';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AngularHomeComponent,
    NavigationComponent,
    LeftNavigationComponent,
    FooterComponent,
    CartComponent,
    CategoryComponent,
    ProductComponent,
    PairsPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    HomeService,
    NavigationService,
    LayoutService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
