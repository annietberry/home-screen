import { ProxyState } from "../AppState.js"
import { clocksService } from "../Services/ClocksServices.js"


function _drawClock() {

  document.getElementById('clock').textContent = Date(ProxyState.clock).toString()
}

export default class ClockController {
  constructor() {
    ProxyState.on('clock', _drawClock)
    console.log("Hello from the Clock Controller")
    setInterval(this.getClock, 1000)
  }

  getClock() {
    clocksService.getNow()
  }
}