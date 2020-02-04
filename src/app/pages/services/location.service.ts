import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private httpClient: HttpClient) {}

  public get(): Observable<any> {
    return this.httpClient.get(
      'https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572',
      {
        headers: { mode: 'no-cors' }
      }
    );
  }
}
