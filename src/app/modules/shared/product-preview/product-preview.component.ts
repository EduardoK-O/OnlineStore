import { Component, OnInit } from '@angular/core';
import { FindProductsService } from 'src/app/services/find-products/find-products.service';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.css']
})
export class ProductPreviewComponent implements OnInit {

  constructor(private FindProductsService: FindProductsService) { }
  product;
  ngOnInit(): void {
    this.FindProductsService.findProduct(this.FindProductsService.productId.toString()).then((response) => {
      console.log(response.producto);
      this.product = response.producto;
    }, (error) => {
      alert("Error " + error.statusText);
    })
  }

}
