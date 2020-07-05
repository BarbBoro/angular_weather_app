import { Component, OnInit } from '@angular/core';
import { WeatherItem } from '../../weather.model';
import { BuildChartService } from 'src/app/services/build-chart.service';
import { Chart } from 'chart.js';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { zip } from 'rxjs';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  chart = [];
  //items$: WeatherItem[];
  constructor(private buildchart: BuildChartService) {}

  ngOnInit(): void {
    /*this.buildchart.getExampleChart().subscribe((res) => {
      console.log(res);
    });*/

    this.buildchart.getExampleChart().subscribe((data) => {
      let max_temp = data['consolidated_weather'].map((data) => data.max_temp);
      let min_temp = data['consolidated_weather'].map((data) => data.min_temp);
      let date: string = data['consolidated_weather'].map((data) =>
        new Date(data.applicable_date).toLocaleTimeString('sk', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })
      );

      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: date,
          datasets: [
            {
              data: max_temp,
              label: 'max. temperature',
              borderColor: '#e0193d',
              fill: false,
            },
            {
              data: min_temp,
              label: 'min. temperature',
              borderColor: '#194ee0',
              fill: false,
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: 'Maximálne/minimálne teploty v °C - Londýn',
            fontSize: 20,
          },
          legend: {
            dispay: true,
          },
          scales: {
            xAxes: [
              {
                display: true,
              },
            ],
            yAxes: [
              {
                display: true,
              },
            ],
          },
        },
      });
    });
  }
}
