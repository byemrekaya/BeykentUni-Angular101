import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Basket } from '../Interfaces/basket';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root',
})
export class BasketService extends RestService {
  addToCart(body: Basket): Observable<Basket> {
    return this.post<Basket>('/basket', body);
  }

  getCart(): Observable<Basket[]> {
    return this.get<Basket[]>('/basket');
  }
}
