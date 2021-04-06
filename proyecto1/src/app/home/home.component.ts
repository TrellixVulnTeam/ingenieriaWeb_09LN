import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  id:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  pepito(){
    this.id=1222;
    console.log(this.id);
  }

}
