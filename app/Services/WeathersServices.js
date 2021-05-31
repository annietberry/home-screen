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
    ProxyState.temp = celsius
    console.log("Running Convert Celsius")
  }

  convertFarenheit() {
    let kelvin = ProxyState.weather
    // TODO CHANGE FORMULA TO CONVERT FROM KELVIN
    let farenheit = ((kelvin - 273.1) * (9 / 5) + 32).toFixed(2)
    ProxyState.temp = farenheit
  }

  async getWeather() {
    let res = await weatherApi.get()
    console.log('initial weather response', res);
    ProxyState.weather = res.data.main.temp
  }
}

export const weathersService = new WeathersService()