import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public get(endpoint: string, queryParams = {}): Observable<any> {
    const params = new HttpParams({
      fromObject: queryParams
    });
    return this.http.get(this.apiUrl + endpoint, { params }).pipe(take(1));
  }

  public post(
    endpoint: string,
    payload: object = {},
    queryParams = {}
  ): Observable<any> {
    const params = new HttpParams({
      fromObject: queryParams
    });
    return this.http
      .post(this.apiUrl + endpoint, payload, { params })
      .pipe(take(1));
  }

  public put(endpoint: string, payload: object): Observable<any> {
    return this.http.put(this.apiUrl + endpoint, payload).pipe(take(1));
  }
}
