import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privado',
  templateUrl: './privado.page.html',
  styleUrls: ['./privado.page.scss'],
})
export class PrivadoPage implements OnInit {

  constructor() { }

  ngOnInit() {
    let datos= JSON.parse(localStorage.getItem('sitiomovil'));
    if(!datos){
        window.location.href="/home";
    }

  }

}
