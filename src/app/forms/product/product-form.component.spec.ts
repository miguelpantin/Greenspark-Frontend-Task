import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductFormComponent } from './product-form.component';
import { EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

describe('ProductFormComponent', () => {
  let component: ProductFormComponent;
  let fixture: ComponentFixture<ProductFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductFormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit toggleActive event when emitToggle is called and product is active', () => {
    const mockProduct: Product = {
      id: 1,
      type: 'carbon',
      amount: 10,
      action: 'collects',
      active: true,
      linked: false,
      selectedColor: 'white'
    };

    component.product = mockProduct;
    spyOn(component.toggleActive, 'emit');

    component.emitToggle();

    expect(component.toggleActive.emit).toHaveBeenCalledWith(mockProduct);
  });

  it('should not emit toggleActive event when emitToggle is called and product is not active', () => {
    const mockProduct: Product = {
      id: 1,
      type: 'carbon',
      amount: 10,
      action: 'collects',
      active: false,
      linked: false,
      selectedColor: 'white'
    };

    component.product = mockProduct;
    spyOn(component.toggleActive, 'emit');

    component.emitToggle();

    expect(component.toggleActive.emit).not.toHaveBeenCalled();
  });
});