import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketGuard } from './guards/basket.guard';
import { CheckoutComponent } from './modules/checkout/checkout.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { CheckoutResolver } from './resolvers/checkout.resolver';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'checkout', component: CheckoutComponent, resolve: [CheckoutResolver], canDeactivate: [BasketGuard] },
  {
    path: 'detail',
    loadChildren: () => import('./modules/product/product.module').then((m) => m.ProductModule),
  },
  { path: '**', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
