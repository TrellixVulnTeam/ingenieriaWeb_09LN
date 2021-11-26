import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {Lista} from './../youtube';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit {
  safeURL:any;
  Videos=Lista;
  constructor(private _sanitizer: DomSanitizer) {
   }

  ngOnInit(): void {

    
  }
  LimpiarURL(idVideo:string){
    return this._sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/'${idVideo}`);
  }

  

}
