import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-home',
  templateUrl: './angular-home.component.html',
  styleUrls: ['./angular-home.component.scss']
})
export class AngularHomeComponent implements OnInit {
  title = 'orderup-trial-app';
  constructor() { }

  ngOnInit() {
  }

}
