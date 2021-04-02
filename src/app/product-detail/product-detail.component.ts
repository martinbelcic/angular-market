import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../models/product.model';

import { ProductService } from './../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private ProductService: ProductService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.product = this.ProductService.getProduct(params.id);
    });
  }

}
