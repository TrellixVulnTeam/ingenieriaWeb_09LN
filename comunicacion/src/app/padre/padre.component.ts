import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss']
})
export class PadreComponent implements OnInit {
  usuarioPadre="sancano";
  items = ['item1', 'item2', 'item3', 'item4'];
  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: string) {
    this.items.push(newItem);
    console.log(this.items);
  }

}
