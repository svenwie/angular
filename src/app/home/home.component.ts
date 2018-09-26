import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "this is home.component.ts";
  @Input() ninja;
  @Output() onYell = new EventEmitter();
  fireYellEvent(e){
    this.onYell.emit(e);
    alert("Button clicked!");
  }

  constructor() { }

  ngOnInit() {
  }

}
