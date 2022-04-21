import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router} from '@angular/router';



@Component({
  selector: 'app-perdidos',
  templateUrl: './perdidos.page.html',
  styleUrls: ['./perdidos.page.scss'],
})
export class PerdidosPage implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
  }

  
  formulario(){
    let navigationExtras: NavigationExtras={
    
    }
    this.router.navigate(['../formulario'], navigationExtras);
  }

  

}
