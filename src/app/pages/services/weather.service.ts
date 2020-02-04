import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private httpService: HttpService) {}

  public get(id: string): Observable<any> {
    return this.httpService.get(`/weathers/${id}`);
  }
}
