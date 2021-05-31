
import { tasksService } from "../Services/TasksService.js"
import { ProxyState } from '../AppState.js'

import { loadState } from '../Utils/LocalStorage.js'
// import TasksController from "./TasksController.js"
import ListsController from "./ListsController.js"

function _draw() {
  console.log('drawing your lists')
  let tasks = ProxyState.tasks
  let taskElm = document.getElementById('lists')
  let template = ''

  tasks.forEach(task => {
    template += ` <li class="row align-items-center justify-content-between p-2">
        <input onclick="app.listsController.checkBox()" type="checkbox" id="input">
        <label for="task1">
            <div class="col d-flex ">${task.description}
            </div>
        </label>
        <button onclick="app.listsController.clickSweetTask('${task.description}')" class="btn btn-primary"><i class="fa fa-trash" aria-hidden="true"></i></button>
        <br>
    </li>`
  })

  template += `</ul>

      <form onsubmit="app.tasksController.addTask(event)">
          <label for="name"></label>
          <input required minlength="3" maxlength="50" type="text" name="name" id="" class="form-control"
              placeholder="" aria-describedby="helpId">
          <button class="btn btn-primary btn-block text-dark mt-1"
              "> Add task</button>
      </form>
  </div>
  </div>
  `

  taskElm.innerHTML = template
}


export default class TasksController {
  constructor() {
    console.log("drawing your tasks")
    ProxyState.on('tasks', _draw)
    loadState()

  }

  addTask(event) {
    event.preventDefault()
    console.log("create task is hitting")
    let form = event.target
    let newTask = {
      description: form.name.value,

    }
    tasksService.addTask(newTask)
  }

  removeTask(taskName) {
    console.log("task was removed")
    tasksService.removeTask(taskName)
  }


  // checkBoxes() {
  //   var inputElems = document.getElementById("input")

  //   for (var i = 0; i < inputElems.length; i++) {
  //     if (inputElems[i].type == "checkbox" && inputElems[i].checked == true) {
  //       count
  //       count++;
  //     }
  //   }
  // }

  checkBoxes() {
    if (document.getElementById('input').checked == true) {
      var checkCount = checkCount++
    }
  }
}