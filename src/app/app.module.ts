import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//pages
import { HomeComponent } from './components/home/home.component';
import { TableComponent } from './components/table/table.component';
import { ChartComponent } from './components/chart/chart.component';
import { HeatComponent } from './components/heat/heat.component';

import { AppRoutingModule } from './app-routing.module';
import { TheNavigationComponent } from './components/the-navigation/the-navigation.component';
//services
import { GetWeatherService } from './services/get-weather.service';
import { BuildChartService } from './services/build-chart.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
    ChartComponent,
    HeatComponent,
    TheNavigationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [GetWeatherService, BuildChartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
