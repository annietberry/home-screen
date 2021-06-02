import Value from "./Models/Value.js"
import List from "./Models/List.js"
import Task from "./Models/Task.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */

   /** @type {Task[]} */
   tasks = []
   completed = 0

   /** @type {List[]} */
   lists = []
  values = []

  image = ''

  author = ''
  quote = ''


  weather = []

  temp = 0


  clock = 0

  isCelsius = true


}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
