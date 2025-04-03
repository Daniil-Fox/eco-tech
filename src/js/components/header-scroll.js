let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector(".header");
const siteContainer = document.querySelector(".site-container");
// Добавляем CSS для плавной анимации
const style = document.createElement("style");
style.textContent = `
    .header {
        transition: transform 0.3s ease-out, background-color 0.3s ease-out;
    }

    .header.header--hidden {
        transform: translateY(-100%);
    }

    .header.header--scrolled {
        position: fixed !important;
        left: 0;
        top: 0;
        width: 100%;
        z-index: 100;
        background-color: #fff; /* или любой другой цвет */
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
`;
document.head.appendChild(style);

function handleScroll() {
  const currentScroll = window.pageYOffset;
  const isInitialPosition = currentScroll < defaultOffset;
  const isScrollingUp = currentScroll < lastScroll;

  // Если мы в начальной позиции
  if (isInitialPosition) {
    // Возвращаем изначальное состояние
    header.classList.remove("header--scrolled");
    header.classList.remove("header--hidden");
    header.classList.remove("header--dark");
    siteContainer.style.paddingTop = null;
    // Восстанавливаем изначальное position
    if (header.classList.contains("header--sec")) {
      header.style.position = "relative";
    } else {
      header.style.position = "absolute";
    }
  }
  // Если скроллим вверх и не в начальной позиции
  else if (isScrollingUp) {
    header.classList.remove("header--hidden");
    header.classList.add("header--scrolled");
    header.classList.contains("header--sec")
      ? (siteContainer.style.paddingTop = header.scrollHeight + "px")
      : null;
    // Добавляем темный класс если его нет
    if (!header.classList.contains("header--dark")) {
      header.classList.add("header--dark");
    }
  }
  // Если скроллим вниз и не в начальной позиции
  else {
    header.classList.add("header--hidden");
  }

  lastScroll = currentScroll;
}

// Используем throttle для оптимизации производительности
let timeout;
window.addEventListener("scroll", () => {
  if (timeout) {
    window.cancelAnimationFrame(timeout);
  }

  timeout = window.requestAnimationFrame(() => {
    handleScroll();
  });
});
