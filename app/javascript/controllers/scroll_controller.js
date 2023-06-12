import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["cards"];
  leftButton = document.querySelector(".left-arrow");
  rightButton = document.querySelector(".right-arrow");

  connect() {
    console.log("Hello World!3");
    this.updateButtonVisibility();
  }

  scrollLeft() {
    const cardWidth = this.getCardWidth();
    const scrollLeft = this.cardsTarget.scrollLeft - cardWidth;

    if (scrollLeft < 0) {
      this.cardsTarget.scrollTo({
        left: 0,
        behavior: "smooth"
      });
    } else {
      this.cardsTarget.scrollTo({
        left: scrollLeft,
        behavior: "smooth"
      });
    }

    setTimeout(() => {
      this.updateButtonVisibility();
    }, 300); // Add a delay of 300ms before updating the button visibility
  }

  scrollRight() {
    const cardWidth = this.getCardWidth();
    const maxScrollLeft = this.cardsTarget.scrollWidth - this.cardsTarget.offsetWidth;
    const scrollLeft = this.cardsTarget.scrollLeft + cardWidth;

    if (scrollLeft > maxScrollLeft) {
      this.cardsTarget.scrollTo({
        left: maxScrollLeft,
        behavior: "smooth"
      });
    } else {
      this.cardsTarget.scrollTo({
        left: scrollLeft,
        behavior: "smooth"
      });
    }

    setTimeout(() => {
      this.updateButtonVisibility(maxScrollLeft);
    }, 300); // Add a delay of 300ms before updating the button visibility
  }

  getCardWidth() {
    const cardElement = this.cardsTarget.querySelector('.card');
    const cardStyle = window.getComputedStyle(cardElement);
    const cardWidth =
      parseFloat(cardStyle.width)
      + parseFloat(cardStyle.marginRight)
      + parseFloat(cardStyle.marginLeft)
      + parseFloat(cardStyle.paddingRight)
      + parseFloat(cardStyle.paddingLeft);

    return cardWidth;
  }

  updateButtonVisibility() {
    const scrollLeft = this.cardsTarget.scrollLeft;
    const maxScrollLeft = this.cardsTarget.scrollWidth - this.cardsTarget.offsetWidth;

    console.log("scrollLeft:", scrollLeft);
    console.log("maxScrollLeft:", maxScrollLeft);

    if (scrollLeft <= this.getCardWidth()/2) {
      console.log("Hide left button");
      this.leftButton.classList.add("hidden");
    } else {
      console.log("Show left button");
      this.leftButton.classList.remove("hidden");
    }

    if (maxScrollLeft - scrollLeft <=  this.getCardWidth()/2) {
      console.log("Hide right button");
      this.rightButton.classList.add("hidden");
    } else {
      console.log("Show right button");
      this.rightButton.classList.remove("hidden");
    }
  }
}
