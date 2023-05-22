import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="favorite"
export default class extends Controller {
  static targets = [ "star"]
  connect() {
    console.log("test")
  }

  toggle() {
    console.log("clicked on star")
    const star = this.starTarget;

    if (star.classList.contains("fa-regular")) {
      console.log("ok");
    }

    this.starTarget.classList.toggle("yellow-star");
    this.starTarget.classList.toggle("fa-regular");
    this.starTarget.classList.toggle("fa-solid");

    console.log(this.starTarget)

  }

  addFavorite() {
    console.log("not fav");

  }

  removeFavorite() {
    console.log("fav");
  }
}
