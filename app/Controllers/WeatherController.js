import { ProxyState } from "../AppState.js"
import { weathersService } from "../Services/WeathersServices.js"

function _drawWeather() {
  if (ProxyState.isCelsius) {
    weathersService.convertCelsius()

  }
  else {
    weathersService.convertFarenheit()
  }

  weather.textContent = ProxyState.temp

  weatherUnits.textContent = ProxyState.isCelsius ? 'celsius' : 'farenheit'

}

// function _drawWeatherUnits() {
//   document.getElementById('weather-units').innerHTML = 'Celsius'
// }
export default class WeatherController {
  constructor() {
    console.log("Hello from the Weather Controller")
    ProxyState.on('isCelsius', _drawWeather)
    // ProxyState.on('weather', _drawWeatherUnits)
    this.getWeather()
  }

  async getWeather() {
    await weathersService.getWeather()
    _drawWeather()
  }

  toggleType() {
    ProxyState.isCelsius = !ProxyState.isCelsius
  }
}