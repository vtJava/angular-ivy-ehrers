import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

let serviceUrl: String = 'https://api.openweathermap.org/data/2.5/weather'
let apiKey: String = 'c074c245788df1799579865e74f04a2b'  // insert your API key here

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  constructor(private http: HttpClient) { }

  load(city: String) {
    return this.http.get(serviceUrl + '?q=' + city + '&APPID=' + apiKey)
  }

  getIconUrl(icon: String) {
    return 'http://openweathermap.org/img/w/' + icon + ".png"
  }
}