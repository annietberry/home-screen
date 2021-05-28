import { ProxyState } from "../AppState.js"
import { weatherApi, sandboxApi } from "./AxiosService.js"
import Weather from "../Models/Weather.js"

class WeathersService {
  constructor() {
    console.log("Hello from the Weather Service")
  }

  convertCelsius() {
    let kelvin = ProxyState.weather
    let celsius = (kelvin - 273.1)
    ProxyState.weather = celsius
  }
  async getWeather() {
    let res = await weatherApi.get()
    console.log('initial weather response', res);
    ProxyState.weather = res.data.main.temp
    console.log('Appstate - weather', ProxyState.weather)
    this.convertCelsius()
  }
}

export const weathersService = new WeathersService()