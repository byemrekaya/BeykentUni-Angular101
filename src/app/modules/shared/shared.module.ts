import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [ProductCardComponent],
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  exports: [CommonModule, ProductCardComponent],
})
export class SharedModule {}
