import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Input() product!: Product;
  @Output() toggleActive : EventEmitter<Product> = new EventEmitter<Product>();


  constructor() {
  }

  ngOnInit(): void {
  }

  // When the user active the product, send a call to the app component to disable the others
  emitToggle() {
    if (this.product.active == true) {
      this.toggleActive.emit(this.product);
    }
  }
}