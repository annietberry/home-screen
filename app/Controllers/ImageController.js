import { ProxyState } from "../AppState.js"
import { imagesService } from "../Services/ImagesServices.js"


function _drawImage() {
  //REFERENCE THE BODY
  //ADD STYLE TO THE BODY
  //SET BACKGROUND IMAGE TO IMAGE STORED IN STATE
  document.body.style.backgroundImage = `url('${ProxyState.image}')`
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