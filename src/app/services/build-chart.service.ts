import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherItem } from '../weather.model';

@Injectable({
  providedIn: 'root',
})
export class BuildChartService {
  constructor(private httpclient: HttpClient) {}
  /*getExampleChart() {
    return this.httpclient.get<WeatherItem[]>('/assets/44418.json');
  }*/
  getExampleChart() {
    return this.httpclient.get('/assets/44418.json');
  }
}
