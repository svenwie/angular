import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
// import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']/*,*/
  // directives: [HomeComponent/*, ROUTER_DIRECTIVES*/]
})
export class AppComponent {
  title = 'App works! Like expected!';
  name = 'This is just a test sentence.';
  ninja = {
    name: "Ben",
    belt: "Black"
  };

  yell(e){
    alert("app.component.ts");
    console.log(e);
  }

}
