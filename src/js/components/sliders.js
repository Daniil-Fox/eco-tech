import { Swiper } from "swiper";
import { Navigation, Thumbs, Pagination } from "swiper/modules";
Swiper.use([Navigation, Thumbs, Pagination]);
const singleThumbsSlider = new Swiper(".single__slider--thumb", {
  slidesPerView: "auto",
  spaceBetween: 10,
  autoHeight: true,
  navigation: {
    prevEl: ".single__arr--prev",
    nextEl: ".single__arr--next",
  },
});

const singleSlider = new Swiper(".single__slider--main", {
  slidesPerView: 1,
  spaceBetween: 40,
  thumbs: {
    swiper: singleThumbsSlider,
  },
  navigation: {
    prevEl: ".single__arr--prev",
    nextEl: ".single__arr--next",
  },
});

new Swiper(".tt__slider", {
  slidesPerView: 1,
  spaceBetween: 10,
});
