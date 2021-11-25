import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../../Interfaces/product';
import { ProductService } from '../product/services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements OnInit {
  productList: IProduct[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.productService.getProducts().subscribe((item) => {
      this.productList = item;
    });
  }

  redirectToDetail(product: IProduct) {
    this.router.navigate(['/detail', product.id]);
  }

  canDeactivate() {
    return true;
  }
}
