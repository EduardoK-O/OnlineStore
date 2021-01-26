import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FindProductsService } from 'src/app/services/find-products/find-products.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  constructor(private router: Router, private FindProductsService: FindProductsService) { }
  products = [];
  page = 1;
  pageSize = 6;
  pages = 0;

  ngOnInit(): void {
    this.FindProductsService.findProducts('xiaomi').then((response) => {
      console.log(response.shopping_results.length);
      this.products = response.shopping_results
      if(this.products.length % 6 === 0){
        this.pages = (this.products.length / 6)*10;
        console.log(this.pages);
      }else {
        this.pages = (Math.trunc(this.products.length/6) + 1)*10;
        console.log(this.pages);
      }
    }, (error) => {
      alert("Error " + error.statusText);
    })
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }

 previewProduct(id: number){
  this.FindProductsService.setProductId(id);
  this.router.navigateByUrl('/tienda/producto');
 }
}
