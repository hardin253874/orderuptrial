import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { theme } from '../models/theme';
import { category } from '../models/category';
import {product} from '../models/product';
import { sizes} from '../models/sizes';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private rootComponent: AppComponent
  ) { }

  menuData: any;
  theme: theme;
  categories: category[];
  products: product[];
  categoryId: number;
  currentCategory: category;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.categoryId = parseInt(params.get('categoryId'));
      this.rootComponent.showSideNav();
      this.rootComponent.setCategory(this.categoryId);
      this.getData();
    });
  }

  private getData() {




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
