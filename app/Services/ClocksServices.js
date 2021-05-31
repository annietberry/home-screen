import { ProxyState } from "../AppState.js"
import { clockApi, sandboxApi } from "./AxiosService.js"
import Clock from "../Models/Clock.js"

class ClocksService {
  constructor() {
    console.log("Hello from the Clock Service")

  }

  getNow() {
    //console.log("get now runs")
    ProxyState.clock = Date.now()
    //console.log(ProxyState.clock)
  }
}

export const clocksService = new ClocksService()