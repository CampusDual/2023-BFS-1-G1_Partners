import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-product-detail',
  templateUrl: './form-product-detail.component.html',
  styleUrls: ['./form-product-detail.component.css']
})
export class FormProductDetailComponent implements OnInit {

  @Input() selectedProduct: any;

  constructor() { }

  ngOnInit() {
  }

}
