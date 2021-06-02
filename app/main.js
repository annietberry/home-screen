import ImageController from "./Controllers/ImageController.js";
import QuoteController from "./Controllers/QuoteController.js"
import WeatherController from "./Controllers/WeatherController.js"
import ClockController from "./Controllers/ClockController.js";
import TasksController from "./Controllers/TasksController.js"
import ListsController from "./Controllers/ListsController.js"

class App {

  listsController = new ListsController()

  tasksController = new TasksController()

  imagesController = new ImageController();

  quotesController = new QuoteController();

  weathersController = new WeatherController();

  clockController = new ClockController();

}

window["app"] = new App();
