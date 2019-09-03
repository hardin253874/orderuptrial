import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  public loadMenuData() {
    return this.http.get('../../assets/data/menu.json');
  }

  public loadThemeData() {
    return this.http.get('../../assets/data/theme.json');
  }
}
