import { Component, OnInit } from '@angular/core';
import { FindProductsService } from 'src/app/services/find-products/find-products.service';

@Component({
  selector: 'app-daily-offers',
  templateUrl: './daily-offers.component.html',
  styleUrls: ['./daily-offers.component.css']
})
export class DailyOffersComponent implements OnInit {

  constructor(private FindProductsService: FindProductsService) { }

  ngOnInit(): void {
    this.FindProductsService.findProducts('tv').then((response) => {
      console.log(response);
      alert(response.shopping_results[0].title);
    }, (error) => {
      alert("Error " + error.statusText);
    })
  }

}
