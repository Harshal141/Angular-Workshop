import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private weatherService: WeatherService){}

  weatherData?: WeatherData;
  fetchError?: boolean = false;
  ngOnInit(): void {
    this.weatherService.getWeatherData('Pune').subscribe({
      next: (response)=>{
        this.weatherData = response;
        console.log(response)
      },
      error: (error)=>{
        this.fetchError = true;
        console.log('Error Occured')
        console.log(error)
      }
    })
  }
}
