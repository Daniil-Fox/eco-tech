const popup = document.querySelector(".popup");

if (popup) {
  const modalButtons = document.querySelectorAll(".modal-btn");
  const popupBody = popup.querySelector(".popup__body");
  const closeBtn = popup.querySelector(".popup__close");

  popupBody.addEventListener("click", (e) => {
    e.stopPropagation();
  });
  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    popup.classList.remove("active");
  });
  popup.addEventListener("click", (e) => {
    e.preventDefault();
    popup.classList.remove("active");
  });
  if (modalButtons.length > 0) {
    modalButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        popup.classList.add("active");
      });
    });
  }
}
