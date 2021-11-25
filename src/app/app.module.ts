import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinkDirective } from './directives/link.directive';
import { BasketGuard } from './guards/basket.guard';
import { CheckoutModule } from './modules/checkout/checkout.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { HeaderModule } from './modules/header/header.module';
import { CheckoutResolver } from './resolvers/checkout.resolver';
import { ProductDetailResolver } from './resolvers/product-detail.resolver';

@NgModule({
  declarations: [AppComponent, LinkDirective],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, DashboardModule, HeaderModule, CheckoutModule],
  providers: [ProductDetailResolver, CheckoutResolver, BasketGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
