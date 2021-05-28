import { ProxyState } from "../AppState.js"
import { imageApi, sandboxApi } from "./AxiosService.js"
import Image from "../Models/Image.js"

class ImagesService {
  constructor() {
    console.log("Hello from the Image Service")
  }

  async getImage() {
    let res = await imageApi.get()
    console.log('initial image response', res);
    ProxyState.image = res.data.url
    console.log('Appstate - image', ProxyState.image)
  }

}

export const imagesService = new ImagesService()