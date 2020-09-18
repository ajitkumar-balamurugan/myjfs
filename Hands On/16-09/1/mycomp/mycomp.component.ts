import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.css']
})
export class MycompComponent implements OnInit {

  constructor() { }



  @Input("name") name:string;

  ngOnInit(): void {
  }

@Output() eveChild=new EventEmitter();

sendData(){
  this.eveChild.emit('hello from child');
}

now=new Date();


}
