import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["cards"];

  connect() {
    console.log("Hello World!1");
    console.log(this.updateScrollButtons());
  }

  scrollLeft() {
    const cardWidth = this.getCardWidth();

    if (this.updateScrollButtons()[0]) {
      this.cardsTarget.scrollLeft -= cardWidth;
    }
    this.updateScrollButtons();

  }

  scrollRight() {
    const cardWidth = this.getCardWidth();
    if (this.updateScrollButtons()[1]) {
      this.cardsTarget.scrollLeft += cardWidth;
    }
    this.updateScrollButtons();
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

  updateScrollButtons() {

    const cardWidth = this.getCardWidth();
    const availableWidth = this.cardsTarget.offsetWidth;

    const scrollWidth = this.cardsTarget.scrollWidth;
    // scroll width increases as we add trainings, it tells how width the total width with all cards is
    const scrollLeft = this.cardsTarget.scrollLeft;

    // Calculate how much is left to scroll on both sides
    const remainingScrollLeft = scrollLeft;
    const remainingScrollRight = scrollWidth - scrollLeft - availableWidth;

    let canScrollLeft = (remainingScrollLeft - cardWidth) > -5
    let canScrollRight = (remainingScrollRight - cardWidth) > -5 ;

    const rightButton = document.querySelector(".right-arrow");
    console.log(rightButton);
    if (!canScrollRight && !rightButton.classList.contains("hidden")) {
      rightButton.classList.add("hidden")
    } else if (canScrollRight && rightButton.classList.contains("hidden")) {
      rightButton.classList.remove("hidden")
    };

    const leftButton = document.querySelector(".left-arrow");
    console.log(leftButton);
    if (!canScrollLeft && !leftButton.classList.contains("hidden")) {
      leftButton.classList.add("hidden")
    }else if (canScrollLeft && leftButton.classList.contains("hidden")) {
      leftButton.classList.remove("hidden")
    };



    return [canScrollLeft,canScrollRight]


    // Disable or enable scroll buttons based on scrollability

    //leftButton.disabled = !canScrollLeft;
    // rightButton.disabled = !canScrollRight;
  }
}
