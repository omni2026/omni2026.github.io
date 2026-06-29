window.HELP_IMPROVE_VIDEOJS = false;

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-demo-carousel]").forEach(function (carousel) {
    var slides = Array.prototype.slice.call(carousel.querySelectorAll("[data-demo-slide]"));
    var dots = Array.prototype.slice.call(carousel.querySelectorAll("[data-demo-dot]"));
    var prevButton = carousel.querySelector("[data-demo-prev]");
    var nextButton = carousel.querySelector("[data-demo-next]");
    var activeIndex = 0;

    if (!slides.length) {
      return;
    }

    function setActiveSlide(nextIndex) {
      activeIndex = (nextIndex + slides.length) % slides.length;

      slides.forEach(function (slide, index) {
        var isActive = index === activeIndex;
        var video = slide.querySelector("video");

        slide.classList.toggle("is-active", isActive);
        slide.setAttribute("aria-hidden", isActive ? "false" : "true");

        if (video && !isActive) {
          video.pause();
        }
      });

      dots.forEach(function (dot, index) {
        var isActive = index === activeIndex;
        dot.classList.toggle("is-active", isActive);
        dot.setAttribute("aria-current", isActive ? "true" : "false");
      });
    }

    if (prevButton) {
      prevButton.addEventListener("click", function () {
        setActiveSlide(activeIndex - 1);
      });
    }

    if (nextButton) {
      nextButton.addEventListener("click", function () {
        setActiveSlide(activeIndex + 1);
      });
    }

    dots.forEach(function (dot, index) {
      dot.addEventListener("click", function () {
        setActiveSlide(index);
      });
    });

    setActiveSlide(0);
  });

  var options = {
    slidesToScroll: 1,
    slidesToShow: 1,
    loop: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  if (window.bulmaCarousel && document.querySelector(".carousel")) {
    window.bulmaCarousel.attach(".carousel", options);
  }

  if (window.bulmaSlider) {
    window.bulmaSlider.attach();
  }
});
