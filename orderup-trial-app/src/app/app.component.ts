import { Component } from '@angular/core';
import { DataService} from './services/data.service';
import {category} from './models/category';
import {product} from './models/product';
import {theme} from './models/theme';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private dataService: DataService
  ) { }

  menuData: any;
  theme: theme;
  themes: theme[];
  categories: category[];
  products: product[];
  storeId: number = 1;
  public categoryId: number;
  public isSideNavShown = true;

  public showSideNav() {
    this.isSideNavShown = true;
  }

  public setCategory(categoryId: number){
    this.categoryId = categoryId;
  }

  public setTheme(storeId: number) {
    this.theme = this.themes.filter(t => t.store_id.toString() === storeId.toString())[0];
  }

  public hideSideNav(){
    this.isSideNavShown = false;
  }

  ngOnInit() {
    this.dataService.loadMenuData().subscribe((data: any) =>{
      this.menuData = data;
      this.buildMenus();
    });

    this.dataService.loadThemeData().subscribe((data: any) =>{
      this.themes = data as theme[];
      this.theme = this.themes.find(t => t.store_id === this.storeId);
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

}
