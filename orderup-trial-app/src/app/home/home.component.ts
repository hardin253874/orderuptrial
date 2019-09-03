import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { theme } from '../models/theme';
import { category } from '../models/category';
import {product} from '../models/product';
import { uploaded } from '../models/uploaded';
import { images } from '../models/images';
import { sizes } from '../models/sizes';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private homeService: HomeService
  ) { }

  menuData: any;
  theme: theme;
  categories: category[];
  products: product[];
  ngOnInit() {
    this.homeService.loadMenuData().subscribe((data: any) =>{
      this.menuData = data;
      this.buildMenus();
    });

    this.homeService.loadThemeData().subscribe((data: any) =>{
      this.theme = data as theme;
    });
  }

  private buildMenus() {
    if (!this.menuData) {
      return;
    }
    let that = this;
    const categoriesData = this.menuData['categories'];
    if (categoriesData) {
      that.categories = [];
      Object.keys(categoriesData).forEach(function(key) {
        console.log(key + ' - ' + categoriesData[key]);
        const category = categoriesData[key] as category;
        if (category) {
          that.categories.push(category);
        }
      });
    }

    const productsData = this.menuData['products'];
    if (productsData) {
      that.products = [];
      Object.keys(productsData).forEach(function(key) {
        console.log(key + ' - ' + productsData[key]);
        const product = productsData[key] as product;
        if (product) {
          that.products.push(product);
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
}
