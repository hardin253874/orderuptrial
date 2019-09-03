import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { theme} from '../models/theme';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() theme: theme;
  constructor() { }

  ngOnInit() {
  }

}
