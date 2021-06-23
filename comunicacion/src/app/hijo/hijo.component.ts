import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  @Input()usuarioChild="";
  @Output() propagar = new EventEmitter<string>();

  constructor() { 
  }

  ngOnInit(): void {
  }

  addNewItem(value: string) {
    this.propagar.emit(value);
  }

}
