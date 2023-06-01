import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["cards"];

  connect() {
    console.log("Hello World!15");
    this.updateScrollButtons();
  }

  scrollLeft() {
    console.log("Hello from left scroll click");
    const cardWidth = this.getCardWidth();
    this.cardsTarget.scrollLeft -= cardWidth;
    this.updateScrollButtons();
  }

  scrollRight() {
    console.log("Hello from right scroll click");
    const cardWidth = this.getCardWidth();
    this.cardsTarget.scrollLeft += cardWidth;
    this.updateScrollButtons();
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

  updateScrollButtons() {
    const cardWidth = this.getCardWidth();
    const availableWidth = this.cardsTarget.offsetWidth;
    const scrollWidth = this.cardsTarget.scrollWidth;
    const scrollLeft = this.cardsTarget.scrollLeft;

    const canScrollLeft = scrollLeft > 0;
    const canScrollRight = scrollLeft + availableWidth < cardWidth;

    //tests
    console.log(this.cardsTarget);
    console.log(cardWidth);


    console.log("scrollLeft");
    console.log(scrollLeft);
    console.log("can scroll left");
    console.log(canScrollLeft);
    console.log("can scroll right");
    console.log(canScrollRight);

    // Calculate how much is left to scroll on both sides
    const remainingScrollLeft = scrollLeft;
    const remainingScrollRight = scrollWidth - scrollLeft - availableWidth;

    console.log(`Remaining Scroll Left: ${remainingScrollLeft}px`);
    console.log(`Remaining Scroll Right: ${remainingScrollRight}px`);

    // Disable or enable scroll buttons based on scrollability
    const leftButton = document.querySelector(".left-arrow");
    const rightButton = document.querySelector(".right-arrow");
    leftButton.disabled = !canScrollLeft;
    rightButton.disabled = !canScrollRight;
  }
}
