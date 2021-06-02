import { ProxyState } from '../AppState.js'
import { listsService } from '../Services/ListsService.js'
import { loadState } from '../Utils/LocalStorage.js'

function _draw() {
  tasksCompleted.innerText = ProxyState.completed
  arrayLength.innerText = ProxyState.tasks.length
}

export default class ListsController {
  constructor() {

    ProxyState.on('tasks', _draw)
    loadState()
  }

  createList(event) {
    event.preventDefault()
    let form = event.target
    let newList = {
      name: form.name.value,
      color: form.color.value,
    }
    listsService.createList(newList)

  }

  completeTask(listId) {
    console.log('task completed', listId)
    listsService.completeTask(listId)
  }

  removeList(listId) {
    console.log("list removed")
    listsService.removeList(listId)
  }

  clickSweetTask(taskName) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this task!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your task has been deleted!", {
            icon: "success",
          });
          console.log("this is your tasks name, " + taskName)
          app.tasksController.removeTask(taskName)
        } else {
          swal("Your list is safe!");
        }
      });
  }
}