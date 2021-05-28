import { ProxyState } from "../AppState.js"
import { weathersService } from "../Services/WeathersServices.js"

function _drawWeather() {
  document.getElementById('weather').innerHTML = ProxyState.weather
}
export default class WeatherController {
  constructor() {
    console.log("Hello from the Weather Controller")
    ProxyState.on('weather', _drawWeather)
    this.getWeather()
  }

  getWeather() {
    weathersService.getWeather()
  }

  convertCelsius() {
    weathersService.convertCelsius()
  }
}