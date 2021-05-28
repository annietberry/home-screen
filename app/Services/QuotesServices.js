import { ProxyState } from "../AppState.js"
import { quoteApi, sandboxApi } from "./AxiosService.js"
import Quote from "../Models/Quote.js"

class QuotesService {
  constructor() {
    console.log("Hello from the Quote Service")
  }

  async getQuote() {
    let res = await quoteApi.get()
    console.log('initial quote response', res);
    ProxyState.quote = res.data.content
    console.log('Appstate - quote', ProxyState.quote)
    ProxyState.author = res.data.author
    console.log('Appstate - author', ProxyState.author)
  }
}

export const quotesService = new QuotesService()