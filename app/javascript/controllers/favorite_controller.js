import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="favorite"
export default class extends Controller {
  static targets = [ "star"]
  connect() {
    console.log("test")
  }

  toggle() {
    console.log("clicked on star")

    this.starTarget.classList.toggle("fa-2xl")
    console.log(this.starTarget.innerhtml)

  }
}
