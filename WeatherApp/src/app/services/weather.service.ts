import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { WeatherData } from '../models/weather.model';
import { Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: String): Observable<WeatherData>{
    return this.http.get<WeatherData>('https://openweather43.p.rapidapi.com/weather' ,{
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName , environment.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
      .set('units', 'metric')
      .set('q', cityName.toString())
      .set('appid', 'da0f9c8d90bde7e619c3ec47766a42f4')
      .set('appid', 'da0f9c8d90bde7e619c3ec47766a42f4')
  }).pipe(
    catchError((error: any) => {
      // Handle the error here
      // You can display the error message or take appropriate action
      // For example, you can throw a custom error or return a default weather data object
      return throwError(error);
    })
    );
  }
}
