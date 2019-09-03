import { Injectable } from '@angular/core';
import { cart } from '../models/cart';
import {product} from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: cart = null;

  constructor() { }

  getCart(): any {
    if (!this.cart) {
      this.cart = JSON.parse(localStorage.getItem('orderUpCart')) as cart;
    }

    if (!this.cart) {
      return null;
    }

    return this.cart;
  }

  saveCart(product: product) {
    if (!this.cart) {
      this.cart = JSON.parse(localStorage.getItem('orderUpCart')) as cart;
    }

    if (!this.cart) {
      this.cart = { products: []} as cart;
    }

    this.cart.products.push(product);

    localStorage.setItem('orderUpCart', JSON.stringify(this.cart));
  }

  removeCart(productId: number): any {
    if (!this.cart) {
      this.cart = JSON.parse(localStorage.getItem('orderUpCart')) as cart;
    }

    if (!this.cart || this.cart.products.length === 0) {
      return { products: []} as cart;
    }

    this.cart.products =  this.cart.products.filter(p => p.id !== productId);

    localStorage.setItem('orderUpCart', JSON.stringify(this.cart));

    return this.cart;

  }
}
