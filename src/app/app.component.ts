import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
import { Product } from './models/product.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {

  products: Product[] = [];
  prodSubscription : Subscription | null;

  constructor(private productService: ProductService) {
    this.prodSubscription = null;
  }

  // Creates a subscription to use the service to send a HTTP call to the server, and equals the return with the variable products
  ngOnInit(): void {
    this.prodSubscription = this.productService.getProducts().subscribe((prodReturn) => {
      console.log(prodReturn);
      this.products = prodReturn;
    });
  }

  // When the browser closes this component or don't use it, it is destroyed and unsuscribe the subscription created
  ngOnDestroy() {
    if (this.prodSubscription) {
      this.prodSubscription.unsubscribe();
    }
  }

  // Simply equals to false the active atributte of the rest of the products when the other is actived
  toggleActive(prod: Product) {
    
    this.products.forEach(product => {
      if (product.id !== prod.id) {
        product.active = false;
      }else {
        product.active=true;
      }
    });
    
  }
}
