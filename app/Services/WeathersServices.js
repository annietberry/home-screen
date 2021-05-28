import { ProxyState } from "../AppState.js"
import { weatherApi, sandboxApi } from "./AxiosService.js"
import Weather from "../Models/Weather.js"

class WeathersService {
  constructor() {
    console.log("Hello from the Weather Service")
  }

  convertCelsius() {
    let kelvin = ProxyState.weather
    let celsius = (kelvin - 273.1).toFixed(2)
    ProxyState.weather = celsius
  }

  convertFarenheit() {
    let celsius = ProxyState.weather
    let farenheit = ((celsius * (9 / 5)) + 32).toFixed(2)
    ProxyState.weather = farenheit
  }

  async getWeather() {
    let res = await weatherApi.get()
    console.log('initial weather response', res);
    ProxyState.weather = res.data.main.temp
    console.log('Appstate - weather', ProxyState.weather)
    this.convertCelsius()
    console.log('Appstate - celsius', ProxyState.weather)
  }
}

export const weathersService = new WeathersService()