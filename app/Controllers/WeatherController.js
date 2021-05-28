import { ProxyState } from "../AppState.js"
import { weathersService } from "../Services/WeathersServices.js"

export default class WeatherController {
  constructor() {
    console.log("Hello from the Weather Controller")
  }

  getWeather() {
    weathersService.getWeather()
  }
}