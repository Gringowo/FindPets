import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router,) { }


  adoptar(){
    let navigationExtras: NavigationExtras={
    
    }
    this.router.navigate(['../adoptame'], navigationExtras);
  }

  perdidos(){
    let navigationExtras: NavigationExtras={
    
    }
    this.router.navigate(['../perdidos'], navigationExtras);
  }
  perfil(){
    let navigationExtras: NavigationExtras={
    
    }
    this.router.navigate(['../perfil'], navigationExtras);
  }




}
