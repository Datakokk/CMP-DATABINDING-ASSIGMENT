import { Component, EventEmitter, OnInit, Output } from '@angular/core';
//import EventEmitter = require('events');

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  idInterval;
  numero:number = 0;
  @Output() numeroEmitido = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  incrementingNumber(){
    this.idInterval = setInterval(()=>{
      this.numeroEmitido.emit(
        this.numero++);
      console.log(this.numero);
    },1000);
  }

  stopNumber(){
    clearInterval(this.idInterval);
  }
}
