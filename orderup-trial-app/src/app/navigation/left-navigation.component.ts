import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { category } from '../models/category';
@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.scss']
})
export class LeftNavigationComponent implements OnInit {

  constructor() { }
  @Input()  categories: category[];
  @Input()  activeCategoryId: number;
  ngOnInit() {
  }

}
