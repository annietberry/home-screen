import ImageController from "./Controllers/ImageController.js";
import QuoteController from "./Controllers/QuoteController.js"
import WeatherController from "./Controllers/WeatherController.js"
import ValuesController from "./Controllers/ValuesController.js";
import ClockController from "./Controllers/ClockController.js";

class App {
  valuesController = new ValuesController();

  imagesController = new ImageController();

  quotesController = new QuoteController();

  weathersController = new WeatherController();

  clockController = new ClockController();


}

window["app"] = new App();
