import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct, IProductDetails } from 'src/app/Interfaces/product';
import { RestService } from '../../../services/rest.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends RestService {
  getProducts(): Observable<IProduct[]> {
    return this.get<IProduct[]>('/products');
  }

  getProductDetail(productId: number): Observable<IProductDetails[]> {
    return this.get<IProductDetails[]>('/product-detail', {
      params: new HttpParams({ fromObject: { id: productId } }),
    });
  }
}
