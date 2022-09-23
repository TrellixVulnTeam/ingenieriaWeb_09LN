import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {
  heroe:any={};
  constructor(private activateRoute:ActivatedRoute, private SHeroe:HeroesService) { 
    this.activateRoute.params.subscribe(params=>{
      this.heroe=this.SHeroe.getHeroe(params["id"]);
      console.log(params["id"]+params["nombre"]);
    })
  }

  ngOnInit(): void {
  }

}
