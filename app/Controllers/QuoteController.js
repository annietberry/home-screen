import { ProxyState } from "../AppState.js"
import { quotesService } from "../Services/QuotesServices.js"


function _drawQuote() {

  document.getElementById('quote').innerHTML = ProxyState.quote

}
function _drawAuthor() {
  document.getElementById('author').innerHTML = ProxyState.author
}
export default class QuoteController {
  constructor() {
    console.log("Hello from the Quote Controller")
    ProxyState.on('quote', _drawQuote)
    ProxyState.on('author', _drawAuthor)
    this.getQuote()
  }

  getQuote() {
    quotesService.getQuote()
  }
}