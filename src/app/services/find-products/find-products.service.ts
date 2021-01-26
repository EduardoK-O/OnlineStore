import { Injectable } from '@angular/core';
import { ProductListInterface } from 'src/app/interfaces/product-list-interface/product-list-interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FindProductsService {
  cachedValues: Array<{
    [query: string]: ProductListInterface
  }> = [];

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
}
