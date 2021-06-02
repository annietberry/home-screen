import { generateId } from "../Utils/GenerateId.js"
export default class Task {
  constructor({ description, completed = false, id, user = 'Annie' }) {

    this.description = description
    this.completed = completed
    this.id = id
    this.user = user

  }
}