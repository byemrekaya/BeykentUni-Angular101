import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Basket } from '../Interfaces/basket';
import { BasketService } from '../services/basket.service';

@Injectable({
  providedIn: 'root',
})
export class CheckoutResolver implements Resolve<Basket[]> {
  constructor(private basketService: BasketService) {}

  resolve(): Observable<Basket[]> {
    return this.basketService.getCart();
  }
}
