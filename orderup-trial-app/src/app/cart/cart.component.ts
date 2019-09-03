import { Component, OnInit } from '@angular/core';
import { CartService} from './cart.service';
import {product} from '../models/product';
import { cart } from '../models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(
    private cartService: CartService
  ) { }

  products: product[];
  cart: cart;
  ngOnInit() {
    this.cart = this.cartService.getCart();
    if (this.cart){
      this.products = this.cart.products;
    }
  }

  removeCart(productId) {
    if (!productId) {
      return;
    }

    this.cart = this.cartService.removeCart(productId);
    if (this.cart) {
      this.products = this.cart.products;
    }
  }

}
