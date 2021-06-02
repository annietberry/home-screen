import { ProxyState } from '../AppState.js'
import { listsService } from '../Services/ListsService.js'
import { loadState } from '../Utils/LocalStorage.js'
import TasksController from "./TasksController.js"




export default class ListsController {
  constructor() {
  
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

  clickSweet(listId) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this list!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your list has been deleted!", {
            icon: "success",
          });
          console.log("this is your lists id, " + listId)
          app.listsController.removeList(listId)
        } else {
          swal("Your list is safe!");
        }
      });
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

  // checkBoxes() {
  //   // var inputElems = document.getElementById("input")
  //   count

  //   for (var i = 0; i < lists.length; i++) {
  //     if (inputElems[i].type == "checkbox" && inputElems[i].checked == true) {
  //       count++;
  //       alert(count);
  //     }

  //   }
  // }

  // checkBoxes() {
  //   if (document.getElementById('input').checked == true) {
  //     var checkCount = checkCount++
  //   }

  // }



}

//app.tasksController.checkBoxes() for onclick line 32