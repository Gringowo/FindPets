import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
  }

  home(){
    let navigationExtras: NavigationExtras={
    
    }
    this.router.navigate(['../home'], navigationExtras);
  }

}
