import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ProductService } from './services/product.service';
import { of } from 'rxjs';
import { Product } from './models/product.model';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let productService: jasmine.SpyObj<ProductService>;

  beforeEach(() => {
    const productServiceSpy = jasmine.createSpyObj('ProductService', ['getProducts']);

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{ provide: ProductService, useValue: productServiceSpy }],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService) as jasmine.SpyObj<ProductService>;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should get products on init', () => {
    const mockProducts: Product[] = [
      { id: 1, type: 'carbon', amount: 10, action: 'collects', active: false, linked: false, selectedColor: 'white' },
    ];

    productService.getProducts.and.returnValue(of(mockProducts));

    component.ngOnInit();

    expect(component.products).toEqual(mockProducts);
  });

  it('should unsubscribe on destroy', () => {
    const unsubscribeSpy = jasmine.createSpy();

    component.prodSubscription = { unsubscribe: unsubscribeSpy } as any;
    component.ngOnDestroy();

    expect(unsubscribeSpy).toHaveBeenCalled();
  });

  it('should toggle active product', () => {
    const mockProducts: Product[] = [
      { id: 1, type: 'carbon', amount: 10, action: 'collects', active: false, linked: false, selectedColor: 'white' },
      { id: 2, type: 'plastic bottles', amount: 5, action: 'plants', active: true, linked: false, selectedColor: 'black' },
    ];

    component.products = mockProducts;

    const selectedProduct: Product = { id: 1, type: 'carbon', amount: 10, action: 'collects', active: false, linked: false, selectedColor: 'white' };
    component.toggleActive(selectedProduct);

    expect(component.products[0].active).toBe(true);
    expect(component.products[1].active).toBe(false);
  });
});