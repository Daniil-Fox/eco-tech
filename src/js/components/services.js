const serviceItems = document.querySelectorAll(".our-service__item--extra");

if (serviceItems.length > 0) {
  const modals = document.querySelectorAll(".modal[data-modal]");

  const clear = () => {
    modals.forEach((item) => {
      item.classList.remove("active");
    });
  };
  modals.forEach((m) => {
    const body = m.querySelector(".modal__body");
    const closeBtn = m.querySelector(".modal__close");

    body.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    closeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      m.classList.remove("active");
      document.body.style.overflow = null;
    });
    m.addEventListener("click", (e) => {
      e.preventDefault();
      m.classList.remove("active");
      document.body.style.overflow = null;
    });
  });

  serviceItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const cat = item.dataset.service;
      clear();
      document.body.style.overflow = "hidden";
      document
        .querySelector(`.modal[data-modal=${cat}]`)
        .classList.add("active");
    });
  });
}
