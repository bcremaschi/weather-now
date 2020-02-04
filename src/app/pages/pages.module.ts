import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MainComponent } from './main/main.component';
import { WeatherNowComponent } from './weather-now/weather-now.component';
import { HttpService } from './services/http.service';
import { WeatherService } from './services/weather.service';
import { LocationService } from './services/location.service';

@NgModule({
  declarations: [MainComponent, WeatherNowComponent],
  imports: [BrowserModule, CommonModule, ReactiveFormsModule, HttpClientModule],
  providers: [HttpService, WeatherService, LocationService]
})
export class PagesModule {}
