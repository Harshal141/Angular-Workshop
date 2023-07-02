import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: String): Observable<WeatherData>{
    return this.http.get<WeatherData>(`https://open-weather13.p.rapidapi.com/city/${cityName}` ,{
      headers: new HttpHeaders()
      .set('X-RapidAPI-Host', 'open-weather13.p.rapidapi.com')
      .set('X-RapidAPI-Key' , 'd449c3ff7dmsh85c44152b8dd5d6p1f6911jsn88eb5cc93213')
  })
}
}
