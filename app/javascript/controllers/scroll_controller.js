import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["cards"];
  leftButton = document.querySelector(".left-arrow");
  rightButton = document.querySelector(".right-arrow");

  connect() {
    console.log("Hello World!15");
    this.updateButtonVisibility();
  }

  scrollLeft() {
    const cardWidth = this.getCardWidth();
    this.cardsTarget.scrollTo({
      left: this.cardsTarget.scrollLeft - cardWidth,
      behavior: "smooth"
    });
    this.updateButtonVisibility();
  }

  scrollRight() {
    const cardWidth = this.getCardWidth();
    const maxScrollLeft = this.cardsTarget.scrollWidth - this.cardsTarget.offsetWidth;

    this.cardsTarget.scrollTo({
      left: this.cardsTarget.scrollLeft + cardWidth,
      behavior: "smooth"
    });

    setTimeout(() => {
      this.updateButtonVisibility(maxScrollLeft);
    }, 500); // 300 ms to wait before measuring the scroll distance
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
    const cardWidth = this.getCardWidth();
    const scrollLeft = this.cardsTarget.scrollLeft;
    const maxScrollLeft = (Math.floor(this.cardsTarget.scrollWidth / cardWidth) - 5) * cardWidth; // Adjust the factor (e.g., 5) as needed

    console.log("scrollLeft:", scrollLeft);
    console.log("maxScrollLeft:", maxScrollLeft);

    if (scrollLeft <= 0) {
      console.log("Hide left button");
      this.leftButton.classList.add("hidden");
    } else {
      console.log("Show left button");
      this.leftButton.classList.remove("hidden");
    }

    if (scrollLeft >= maxScrollLeft) {
      console.log("Hide right button");
      this.rightButton.classList.add("hidden");
    } else {
      console.log("Show right button");
      this.rightButton.classList.remove("hidden");
    }
  }


}
