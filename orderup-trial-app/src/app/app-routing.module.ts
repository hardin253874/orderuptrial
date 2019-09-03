import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, AngularHomeComponent} from './home/index';
import { CategoryComponent} from './category/category.component';
import { ProductComponent } from './product/product.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'angularhome', component: AngularHomeComponent},
  { path: 'category/:categoryId', component: CategoryComponent },
  { path: 'product/:productId', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
