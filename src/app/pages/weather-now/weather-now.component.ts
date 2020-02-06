import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-now',
  templateUrl: './weather-now.component.html',
  styleUrls: ['./weather-now.component.scss']
})
export class WeatherNowComponent implements OnInit {
  public city = this.activatedRoute.snapshot.queryParams.city;
  public weather: number;
  public message: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.getDataWeather();
  }

  getDataWeather() {
    const id = Math.floor(Math.random() * 7) + 1;

    this.weatherService.get(id.toString()).subscribe(response => {
      this.weather = response.weather;
      this.message = response.message;
    });
  }
}
