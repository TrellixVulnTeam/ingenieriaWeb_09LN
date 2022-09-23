import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../services/heroes.service';
import {Heroe} from '../../interfaces/heroe';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes:Heroe[]=[];
  constructor(private Sheroes:HeroesService) {
      
  }

  ngOnInit(): void {
   this.heroes=this.Sheroes.getHeroes();
   console.log(this.heroes);
  }

}
