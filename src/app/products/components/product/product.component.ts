import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from './../../../core/services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
  }

  addCart() {
    console.log("Agregado al carrito");
    this.cartService.addCart(this.product);
  }

}
