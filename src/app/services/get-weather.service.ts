import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherItem } from '../weather.model';

@Injectable({ providedIn: 'root' })
export class GetWeatherService {
  apiUrl = '/api/location/44418/2019/7/7/';
  constructor(private httpclient: HttpClient) {}

  getWeatherDays() {
    return this.httpclient.get<WeatherItem[]>(this.apiUrl);
  }

  /*getExample() {
    return this.httpclient.get<WeatherItem[]>('/assets/weatherEx.json');
  }*/
}
