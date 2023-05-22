import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="favorite"
export default class extends Controller {
  static targets = [ "star"]

  toggle() {
    console.log("clicked on star")
    const star = this.starTarget;

    if (star.classList.contains("fa-regular")) {
      this.addFavorite();
    }
    else {
      this.removeFavorite();
    }

    this.starTarget.classList.toggle("yellow-star");
    this.starTarget.classList.toggle("fa-regular");
    this.starTarget.classList.toggle("fa-solid");

    console.log(this.starTarget)
  }

  addFavorite() {
    console.log("not fav");
    const trainingId = this.data.get("trainingId"); // Retrieve the training ID from data attribute
    console.log(trainingId);

    // Add your logic to add the favorite here
  }

  removeFavorite() {
    console.log("fav");
    // Add your logic to remove the favorite here
  }
}
