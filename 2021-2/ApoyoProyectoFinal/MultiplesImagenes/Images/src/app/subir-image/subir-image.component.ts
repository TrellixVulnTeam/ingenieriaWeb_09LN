import { Component, OnInit } from '@angular/core';
import {SubirImagenService} from '../subir-imagen.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-subir-image',
  templateUrl: './subir-image.component.html',
  styleUrls: ['./subir-image.component.scss']
})
export class SubirImageComponent implements OnInit {
  selectedFiles?: FileList;
  Imagenes:Array<any>=[];
  imageInfos?: Observable<any>;
  constructor(private servicio:SubirImagenService) { }

  ngOnInit(): void {

    this.imageInfos=this.servicio.getFiles();

  }

  selectArchivos(event: any): void {
   
    this.selectedFiles = event.target.files;
    
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => { 
          this.Imagenes.push(e.target.result);

        };
        
        reader.readAsDataURL(this.selectedFiles[i]);
      }
    }
  }

  SubirArchivos(): void {
    if (this.selectedFiles) {
      console.log(this.selectedFiles.length);
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(i, this.selectedFiles[i]);
      }
    }
  }

  subir(idx: number, file: File): void {
    if (file) {
      const formData: FormData = new FormData();
      formData.append('file', file);
      

    }
  }

  upload(idx: number, file: File): void {
    console.log(idx);
    if (file) {
      this.servicio.upload(file).subscribe((event: any)=>{
             


      });
    }
  }

}
