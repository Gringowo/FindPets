import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adoptame',
  templateUrl: './adoptame.page.html',
  styleUrls: ['./adoptame.page.scss'],
})
export class AdoptamePage implements OnInit {

  constructor() { }

  option ={
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay: true, 

  }

  ngOnInit() {
  }

}
