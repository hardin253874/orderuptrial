import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import {category} from '../models/category';
import {theme} from '../models/theme';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }
  @Input()  categories: category[];
  @Input()  activeCategoryId: number;
  @Input()  theme: theme;
  ngOnInit() {
  }

}
