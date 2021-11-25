import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [CommonModule, ReactiveFormsModule, ProductRoutingModule],
})
export class ProductModule {}
