import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  ninja: string;
  classes = {'blue': true, 'red': false, 'underline': true};
  test = true;
  // ninja = [
  //   {name: "Tree", form: 'big'},
  //   {name: "Bush", form: 'small'},
  //   {name: "Cat", form: 'fluffy'}
  //   ];

  constructor(private route: ActivatedRoute) {
    this.ninja = route.snapshot.params['ninja'];
  }

  ngOnInit() {
  }

}
