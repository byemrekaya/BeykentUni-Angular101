import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IProductDetails } from '../Interfaces/product';
import { ProductService } from '../modules/product/services/product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailResolver implements Resolve<IProductDetails[]> {
  constructor(private productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProductDetails[]> {
    return this.productService.getProductDetail(route.params.id);
  }
}
