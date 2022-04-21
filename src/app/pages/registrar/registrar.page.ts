import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
  }

  login(){
    let navigationExtras: NavigationExtras={
    
    }
    this.router.navigate(['../login'], navigationExtras);
  }

  


}
