import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
  }

  volver(){
    let navigationExtras: NavigationExtras={
    
    }
    this.router.navigate(['../home'], navigationExtras);
  }


}
