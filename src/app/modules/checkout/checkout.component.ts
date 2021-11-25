import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CanComponentDeactivate } from '../../guards/basket.guard';
import { Basket } from '../../Interfaces/basket';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass'],
})
export class CheckoutComponent implements OnInit, CanComponentDeactivate {
  cart$!: Observable<Basket[]>;

  total$: Observable<number> = of(0);

  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
    this.getCart();
  }

  canDeactivate(): Observable<boolean> {
    const result = window.confirm('Sepetten çıkmak istediğinize emin misiniz?');

    return of(result);
  }

  private getCart(): void {
    this.cart$ = this.basketService.getCart();
    this.total$ = this.cart$.pipe(map((items) => items.reduce((acc, item) => acc + item.price, 0)));
  }
}
