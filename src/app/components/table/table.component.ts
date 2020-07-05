import { Component, OnInit } from '@angular/core';

import { WeatherItem } from '../../weather.model';
import { GetWeatherService } from 'src/app/services/get-weather.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  items$: WeatherItem[];

  constructor(private getweatherService: GetWeatherService) {}

  ngOnInit(): void {
    /* this.getweatherService.getExample().subscribe((data) => {
      this.items$ = data;
    });*/

    this.getweatherService.getWeatherDays().subscribe((data) => {
      this.items$ = data;
    });
  }
}
