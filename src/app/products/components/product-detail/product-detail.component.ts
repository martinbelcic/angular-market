import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../../models/product.model';

import { ProductService } from '../../../core/services/product/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.fetchProduct(params.id);
      // this.product = this.ProductService.getProduct(params.id);
    });
  }

  fetchProduct(id: string) {
    this.productService.getProduct(id)
      .subscribe(product => {
        this.product = product;
      });
  }

}
