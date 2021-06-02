export const api = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api",
  timeout: 10000
})

export const weatherApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/weather",
  timeout: 10000
})

export const imageApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/images",
  timeout: 10000
})

export const quoteApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 10000
})

export const sandboxApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/Annie/todos",
  timeout: 10000
})



export const clockApi = axios.create({
  baseURL: "http://worldtimeapi.org/api/timezone/America/Boise",
  timeout: 10000
})