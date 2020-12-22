import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = ["../../../../assets/images/Slide1.jpeg",
            "../../../../assets/images/Slide2.jpeg",
            "../../../../assets/images/Slide3.jpeg"];
}
