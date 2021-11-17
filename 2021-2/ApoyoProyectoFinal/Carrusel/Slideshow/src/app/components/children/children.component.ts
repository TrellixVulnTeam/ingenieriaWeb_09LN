import { Component, Input, OnInit,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent implements OnInit {
   @Input() ParentData:any;
  constructor() { }

  ngOnInit(): void {
     console.log(this.ParentData);
  }

  cambiarValor(){
    this.ParentData-=1;
  }

  ngOnChanges(cambios:SimpleChanges){
    console.log(cambios);
  }

    

}
