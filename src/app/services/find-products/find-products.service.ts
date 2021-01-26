import { Injectable } from '@angular/core';
import { ProductListInterface } from 'src/app/interfaces/product-list-interface/product-list-interface';
import { HttpClient } from '@angular/common/http';
import { query } from '@angular/animations';
import { ProductInterface } from 'src/app/interfaces/product-interface/product-interface';

@Injectable({
  providedIn: 'root'
})
export class FindProductsService {
  cachedValues: Array<{
    [query: string]: ProductListInterface
  }> = [];
  productId = 0;



  constructor(private http:HttpClient) {
    this.http = http
   }

   findProducts = (query: string): Promise<ProductListInterface>=> {
    let promise = new Promise<ProductListInterface>((resolve, reject) => {
      if(this.cachedValues[query]) {
        resolve(this.cachedValues[query]);
      }
      else {
        this.http.get('http://localhost:3000/productos_con_fotos')
        .toPromise()
        .then( (response) => {
          resolve(response as ProductListInterface)
        }, (error) => {
          reject(error);
        })
      }
    })
    return promise;
   }

   findProduct = (query: string): Promise<ProductInterface>=> {
    let promise = new Promise<ProductInterface>((resolve, reject) => {
      if(this.cachedValues[query]) {
        resolve(this.cachedValues[query]);
      }
      else {
        this.http.get('http://localhost:3000/producto/'+ query)
        .toPromise()
        .then( (response) => {
          resolve(response as ProductInterface)
        }, (error) => {
          reject(error);
        })
      }
    })
    return promise;
   }

   setProductId(id: number){
     this.productId = id;
   }
}
