import { ProxyState } from "../AppState.js"
import Task from "../Models/Task.js"
import { sandboxApi } from "./AxiosService.js";



class TasksService {

  // async getCaughtPokemon(){
  //   try {
  //     let res = await sandboxApi.get()
  //     console.log('my pokemon', res);
  //     ProxyState.caughtPokemon = res.data.map(cp => new Pokemon(cp))
  //     console.log("my caught pokemon", ProxyState.caughtPokemon);
  //   } catch (error) {
  //     console.log(error)
  //   }

  // }

  // async catchPokemon() {
  //   try {
  //     let res = await sandboxApi.post("", ProxyState.activePokemon)
  //     console.log("catch pokemon", res)
  //     this.getCaughtPokemon()
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }


  async addTask(newTask) {
    try {
      let res = await sandboxApi.post('', new Task(newTask))
      ProxyState.tasks = [...ProxyState.tasks, res.data]
      console.log("All tasks", ProxyState.tasks)
    }
    catch (error) {
      console.log(error)
    }

  }

  // async releasePokemon(pokemonName){
  //   try {
  //     let foundPokemon = ProxyState.caughtPokemon.find(cp => cp.name == pokemonName)
  //     console.log(foundPokemon)
  //     let res = await sandboxApi.delete("/" + foundPokemon.id)
  //     // ProxyState.caughtPokemon = ProxyState.caughtPokemon.filter(cp => cp.id != ProxyState.activePokemon.id)
  //     this.getCaughtPokemon()
  //     console.log(res)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }


  // try {
  //   let res = await sandboxApi.get()
  //   console.log('my pokemon', res);
  //   ProxyState.caughtPokemon = res.data.map(cp => new Pokemon(cp))
  //   console.log("my caught pokemon", ProxyState.caughtPokemon);
  // } catch (error) {
  //   console.log(error)
  // }
  async getTasks() {
    try {
      let res = await sandboxApi.get()
      console.log('my tasks', res)
      ProxyState.tasks = res.data.map(t => new Task(t))
      console.log('my tasks in ProxyState', ProxyState.tasks)
    } catch (error) {
      console.log(error)
    }
  }
  async removeTask(taskName) {
    //TODO change to search by Id
    try {
      let foundTask = await ProxyState.tasks.find(t => t.description == taskName)
      console.log(foundTask)
      let res = await sandboxApi.delete(foundTask.id)
      this.getTasks()
      console.log(res)
    }
    catch (error) {
      console.log(error)
    }

    // ProxyState.tasks = ProxyState.tasks.filter(t => t.name != taskName)
    console.log("task removed")
  }

  //ADD IN FOR COMPLETED.
  // .post('object ', updatew/updatedinfo)

  // async updateTask(task) {
  //     // @ts-ignore
  //     let res = await axios.put(sandboxApi + task.co, formData)

  //     let indexOfCarToBeUpdated = ProxyState.cars.findIndex(c => c.id == formData.id)
  //     ProxyState.cars.splice(indexOfCarToBeUpdated,1, new Car(res.data))
  //     ProxyState.cars = ProxyState.cars
  // }

  async updateTask() {
    // get info to change
    //access id of thing needed to be changed
    //axios put payload(id, completed)
    //check response
    //update proxyState with what you recieved from the response.
    // let res = await axios.put()
    console.log("updating")
  }
}

export const tasksService = new TasksService()