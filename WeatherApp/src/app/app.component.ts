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
  cityName: string = 'pune';
  errorMessage?: string = 'Error Occured';
  ngOnInit(): void {
    this.getData(this.cityName);
    this.cityName='';
  }
  onSubmit(){
    this.getData(this.cityName);
    this.cityName='';
  }
  private getData(cityName: string){
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response)=>{
        this.weatherData = response;
        console.log(response)
      },
      error: (error)=>{
        this.fetchError = true;
        this.errorMessage = error.error.message;
        console.log('Error Occured')
        console.log(error)
      }
    })
  }
}
