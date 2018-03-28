import { Component, OnInit, OnChanges } from '@angular/core';
import { Produit } from '../../domain/produit';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-my-product-list',
  templateUrl: './my-product-list.component.html',
  styleUrls: ['./my-product-list.component.css'],
  providers: [ProductsService]
})
export class MyProductListComponent implements OnInit, OnChanges {
  data: Produit[];
  constructor(private _service: ProductsService) {
     // 'Café', 'Thé', 'Jus', '...'
     console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.data = this._service.getAllProduct();
  }
  ngOnChanges() {
    console.log('ngOnChanges');
  }
}
