import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  themeData: any = null;
  constructor(private http: HttpClient) { }

  public loadThemeData() {
    this.themeData = this.http.get('../../assets/data/theme.json');
  }

  public getThemeData(): any {
    if (!this.themeData) {
      this.loadThemeData();
    }
    return this.themeData;
  }
}
