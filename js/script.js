$(document).ready(function () {
  $(".unique-features-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 800,
    prevArrow: $(".unique-features-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".unique-features-slider-wrap .slider-navigation .slick-next"),
  });

  $(".tab-link").click(function () {
    const tabId = $(this).data("tab");

    // Активируем текущую вкладку
    $(".tab-link").removeClass("active");
    $(this).addClass("active");

    // Плавно скрываем текущее содержимое
    $(".tab-content.active").removeClass("active");

    // Плавно показываем новое содержимое
    setTimeout(function () {
      $("#" + tabId).addClass("active");
    }, 0);
  });
});
