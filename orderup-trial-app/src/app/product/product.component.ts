import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { theme } from '../models/theme';
import { category } from '../models/category';
import {product} from '../models/product';
import { sizes} from '../models/sizes';
import { CartService } from '../cart/cart.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private cartService: CartService,
    private rootComponent: AppComponent
  ) { }
  menuData: any;
  theme: theme;
  categories: category[];
  products: product[];
  productId: number;
  categoryId: number;
  currentProduct: product;
  currentCategory: category;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.productId = parseInt(params.get('productId'));
      this.rootComponent.showSideNav();
      this.getData();
    });
  }

  private getData(){
    this.dataService.loadMenuData().subscribe((data: any) =>{
      this.menuData = data;
      this.buildMenus();
    });
  }

  private buildMenus() {
    if (!this.menuData) {
      return;
    }
    let that = this;


    const productsData = this.menuData['products'];
    if (productsData) {
      that.products = [];
      Object.keys(productsData).forEach(function(key) {
        console.log(key + ' - ' + productsData[key]);
        const product = productsData[key] as product;
        if (product) {
          if (product.id === that.productId){
            that.currentProduct = product;
            that.categoryId = that.currentProduct.category_id;
            that.rootComponent.setCategory(that.categoryId);
          }
          that.products.push(product);
        }
      });
    }

    const categoriesData = this.menuData['categories'];
    if (categoriesData) {
      that.categories = [];
      Object.keys(categoriesData).forEach(function(key) {
        console.log(key + ' - ' + categoriesData[key]);
        const category = categoriesData[key] as category;
        if (category) {
          if (category.id === that.categoryId){
            that.currentCategory = category;
          }
          that.categories.push(category);
        }
      });
    }
  }

  private getProducts(productIds: number[]){
    return productIds.map(id => this.products[id.toString()]);
  }

  getPrice(size: any) {
    if (!size) {
      return;
    }
    return size[Object.keys(size)[0]].price;
  }

  addCart(){
    if (!this.currentProduct){
      return;
    }

    this.cartService.saveCart(this.currentProduct);
  }

}
