import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {

  products:Product[];
  displayedColumns: string[]=['name','stock','price','active','date_added'];


  constructor(private productservice: ProductService) { }

  ngOnInit() {
    this.productservice.getProducts().subscribe(productList => this.products = productList);
  }


}
