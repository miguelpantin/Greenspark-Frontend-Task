import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { environment } from '../../env/environment';
import { Product } from '../models/product.model';

describe('ProductService', () => {
  let productService: ProductService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });

    productService = TestBed.inject(ProductService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(productService).toBeTruthy();
  });

  it('should return products from API', () => {
    const mockProducts: Product[] = [
      { id: 1, type: 'carbon', amount: 10, action: 'collects', active: false, linked: false, selectedColor: 'white' },
      { id: 2, type: 'plastic bottles', amount: 5, action: 'plants', active: true, linked: false, selectedColor: 'black' },
    ];

    productService.getProducts().subscribe((products) => {
      expect(products).toEqual(mockProducts);
    });

    const req = httpTestingController.expectOne(`${environment.apiUrl}`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockProducts);
  });
});