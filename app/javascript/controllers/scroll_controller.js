import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["cards"]

  connect() {
    console.log("Hello World!9");
    const cards = this.cardsTarget;
    console.log(this.cardsTarget);
  }

  scrollLeft() {

    // Logic to scroll to the left
    console.log("Hello from left scroll click");
    const cardWidth = this.getCardWidth();
    this.cardsTarget.scrollLeft -= cardWidth; // Adjust the scroll distance as needed
  }

  scrollRight() {
    // Logic to scroll to the right
    console.log("Hello from right scroll click");
    const cardWidth = this.getCardWidth();
    this.cardsTarget.scrollLeft += cardWidth; // Adjust the scroll distance as needed
  }

  getCardWidth() {
    const cardElement = this.cardsTarget.querySelector('.card');
    const cardStyle = window.getComputedStyle(cardElement);
    const cardWidth = cardElement.offsetWidth
      + parseFloat(cardStyle.marginRight)
      + parseFloat(cardStyle.marginLeft)
      + parseFloat(cardStyle.paddingRight)
      + parseFloat(cardStyle.paddingLeft);
    return cardWidth;
  }
}
