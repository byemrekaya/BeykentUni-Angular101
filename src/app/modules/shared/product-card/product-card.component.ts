import { Component, Input } from '@angular/core';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { IProduct } from 'src/app/Interfaces/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass'],
})
export class ProductCardComponent {
  faHeart = faHeart;
  faHeartRegular = faHeartRegular;
  faShoppingCart = faShoppingCart;

  @Input()
  product!: IProduct;
}
