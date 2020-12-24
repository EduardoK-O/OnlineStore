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
        this.http.get('https://api.scaleserp.com/search?api_key=BFC5CBE2CFDD4583B47F23C5B2C99DD2&q='+query+'&search_type=shopping')
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
