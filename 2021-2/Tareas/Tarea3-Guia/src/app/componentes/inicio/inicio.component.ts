import { Component, OnInit } from '@angular/core';
import {ListaNoticias} from '../../interfaces/noticias';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  ListaNoticias=ListaNoticias;
  constructor() { }

  ngOnInit(): void {
  }

}
