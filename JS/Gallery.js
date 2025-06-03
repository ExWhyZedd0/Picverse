document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card-item");
  const modal = document.getElementById("art-modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalCreator = document.getElementById("modal-creator");
  const modalDescription = document.getElementById("modal-description");
  const closeModal = document.getElementById("close-modal");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const imgSrc = card.querySelector("img").src;
      const title = card.querySelector(".item-name").textContent;
      const creator =
        card.querySelector(".creator-name")?.textContent || "Unknown";
      const description = "This is a description of the artwork.";

      modalImg.src = imgSrc;
      modalTitle.textContent = title;
      modalCreator.textContent = creator;
      modalDescription.textContent = description;

      modal.style.display = "flex";
    });
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
