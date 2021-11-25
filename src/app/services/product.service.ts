import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  path= environment.apiUrl;
  constructor(private http: HttpClient) { }

  getProduct():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.path + '/products');
  }
}
