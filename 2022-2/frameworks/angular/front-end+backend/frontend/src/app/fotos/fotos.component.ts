import { Component, OnInit } from '@angular/core';
import {FotosService} from '../services/fotos.service';
import {Fotos} from '../interfaces/fotos';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.scss']
})
export class FotosComponent implements OnInit {
  foticos:Fotos[]=[];
  constructor(private galeria:FotosService) {

     
  }

  ngOnInit(): void {
    this.galeria.getJSON().subscribe(datos=>{
      this.foticos=datos;
      
      
    })
  }

}
