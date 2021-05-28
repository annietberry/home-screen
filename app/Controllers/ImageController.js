import { ProxyState } from "../AppState.js"
import { imagesService } from "../Services/ImagesServices.js"


function _drawImage(){
  document.getElementById('image').innerHTML = ProxyState.image
}
export default class ImageController {
  constructor() {
    console.log("Hello from the Image Controller")
    ProxyState.on('image', _drawImage)
    this.getImage()
  }

  getImage() {
    imagesService.getImage()
  }
}