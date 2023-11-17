import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../models/product.model';
import { environment } from '../../env/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url: string;
  
  constructor(private http: HttpClient) {
    this.url = environment.apiUrl;
  }
  
  // Calls the API url and return the products
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

}
