import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailResolver } from '../../resolvers/product-detail.resolver';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const routes: Routes = [{ path: ':id', component: ProductDetailComponent, resolve: { data: ProductDetailResolver } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
