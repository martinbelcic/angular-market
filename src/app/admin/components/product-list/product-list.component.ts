import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product/product.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  displayedColumns: String[] = ['id', 'title', 'price', 'actions']; 

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getAllProducts()
      .subscribe(products => {
        this.products = products;
        console.log(products)
      })
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id)
      .subscribe(rta => {
        this.fetchProducts();
      });
  }

}
