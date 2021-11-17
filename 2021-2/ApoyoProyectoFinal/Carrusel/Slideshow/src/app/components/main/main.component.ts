import { Component, OnInit,OnChanges,OnDestroy,DoCheck} from '@angular/core';

import {ArtistasService} from '../../services/artistas.service';
import {Artistas} from '../../interfaces/artistas';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit,OnChanges,OnDestroy,DoCheck{
  ListaArtista=new Array<Artistas>();

  constructor(private http:ArtistasService) {
    
  }

  ngOnInit(): void {
       /*this.http.GetArtistas().subscribe(datos=>{

             for(let i=0;i<datos.items.length;i++){
                //console.log(datos.items[i]);
                this.ListaArtista.push(datos.items[i]);
                //console.log(this.ListaArtista);
             }
             console.log(this.ListaArtista.length);
  
       });*/

       this.http.POSTArtistas().subscribe(datos=>{
            console.log(datos);
       });
       
       
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
