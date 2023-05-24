import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["star"]

  toggle() {
    const star = this.starTarget;

    if (star.classList.contains("fa-regular")) {
      this.addFavorite();
    } else {
      this.removeFavorite();
    }

    star.classList.toggle("yellow-star");
    star.classList.toggle("fa-regular");
    star.classList.toggle("fa-solid");
  }

  addFavorite() {
    const trainingId = this.starTarget.dataset.trainingId;
    const currentUserId = this.starTarget.dataset.currentUserId;

    const payload = {
      favorite: {
        user_id: currentUserId,
        training_id: trainingId
      }
    };

    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    fetch("/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": csrfToken
      },
      body: JSON.stringify(payload)
    })
      .then(response => response.json())
  }

  removeFavorite() {
    const favoriteId = this.starTarget.dataset.favoriteId;

    fetch(`/favorites/${favoriteId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').getAttribute("content")
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === "removed") {
          console.log("Training removed from favorites");
        }
      })
      .catch(error => {
        console.error("Error removing training from favorites:", error);
      });
  }
}
