import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { nanoid } from 'nanoid';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProductDetails } from 'src/app/Interfaces/product';
import { BasketService } from '../../../../services/basket.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent implements OnInit {
  productDetail$!: Observable<IProductDetails>;

  productDetails: IProductDetails = {} as IProductDetails;

  colors = [
    {
      name: 'white',
      class: 'bg-white',
    },
    {
      name: 'gray',
      class: 'bg-gray-200',
    },
    {
      name: 'black',
      class: 'bg-black',
    },
  ];

  sizes = ['xxs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl'];

  form!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private basketService: BasketService,
    private router: Router,
    private cdRef: ChangeDetectorRef,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      color: this.fb.control('white'),
      size: this.fb.control('xxs'),
    });
    // this.productDetail$ = this.route.data.pipe(pluck('data'));
    // this.productDetail$ = this.route.data.pipe(map(res => res.data));
    // this.getProductDetail();
    this.getProductDetailCdRef();
  }

  addToCart(): void {
    const { id, price, productName } = this.productDetails;
    const { color, size } = this.form.value;
    this.basketService
      .addToCart({
        id: nanoid(),
        productId: id!,
        price: price!,
        productName: productName!,
        color,
        size,
      })
      .subscribe(() => this.router.navigate(['/checkout']));
  }

  private getProductDetail(): void {
    this.productDetail$ = this.productService
      .getProductDetail(this.route.snapshot.params.id)
      .pipe(map((res) => res[0]));
  }

  private getProductDetailCdRef(): void {
    this.productService.getProductDetail(this.route.snapshot.params.id).subscribe((res) => {
      this.productDetails = res[0];
      this.cdRef.detectChanges();
      console.log(res);
    });
  }
}
