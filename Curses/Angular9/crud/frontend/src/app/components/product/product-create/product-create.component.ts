import { Product } from './../product.model';
import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0.00
  }

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  createProduct(): void {
      this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Bora dominar o mundo!');
      this.router.navigate(['/products']);
    })
  }

  cancell(): void {
    this.router.navigate(['/products']);
  }

}
