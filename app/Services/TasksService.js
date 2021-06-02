import { ProxyState } from "../AppState.js"
import Task from "../Models/Task.js"
import { sandboxApi } from "./AxiosService.js";



class TasksService {

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

  async getTasks() {
    try {
      let res = await sandboxApi.get()
      console.log('my tasks', res)
      ProxyState.completed = 0
      ProxyState.tasks = res.data.map(t => {
        if (t.completed) {
          ProxyState.completed++
        }
        return new Task(t)
      })

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

  async updateTask(taskId) {
    try {
      let foundTask = await ProxyState.tasks.find(t => t.id == taskId)
      console.log(foundTask)
      let res = await sandboxApi.put(taskId, { completed: !foundTask.completed })
      this.getTasks()

      console.log("******************")
      console.log(res)
    }
    catch (error) {
      console.log(error)
    }

    console.log("updating")
  }
}

export const tasksService = new TasksService()