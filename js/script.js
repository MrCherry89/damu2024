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

  $(".advantages-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    variableWidth: true,
    centerMode: true,
    prevArrow: $(".advantages .slider-navigation .slick-prev"),
    nextArrow: $(".advantages .slider-navigation .slick-next"),
  });

  $(".videos-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    variableWidth: true,
    centerMode: true,
    prevArrow: $(".videos .slider-navigation .slick-prev"),
    nextArrow: $(".videos .slider-navigation .slick-next"),
  });

  $(".contacts-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    speed: 800,
    dots: false,
    prevArrow: $(".contacts .slider-navigation .slick-prev"),
    nextArrow: $(".contacts .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".advertiser .next").on("click", function () {
    $(".advertiser-form-wrap").addClass("show");
  });

  $(".phone-number-input").inputmask({
    mask: "+7 (999)-999-999-9",
  });

  $("#application-form").validate({
    errorClass: "error", // Класс для ошибок
    errorPlacement: function (error, element) {
      // Оставляем пустым, чтобы не показывать текст ошибки
    },
    highlight: function (element) {
      $(element).addClass("error");
    },
    unhighlight: function (element) {
      $(element).removeClass("error");
    },
    submitHandler: function (form) {
      // Действия при успешной валидации
      $("#application-form").hide(); // Скрываем первую форму
      $("#second-form").show(); // Показываем вторую форму
    },
  });

  $("#advertiser-form").validate({
    errorClass: "error",
    errorPlacement: function (error, element) {},
  });

  // Кнопка отправки для первой формы
  $("#first-form-submit").on("click", function (e) {
    e.preventDefault(); // Предотвращаем стандартное поведение

    // Проверка первой формы
    if ($("#application-form").valid()) {
      $("#application-form").submit(); // Вызываем обработчик при успешной валидации
    }
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

  $(".select-wrap select").select2({
    minimumResultsForSearch: 6,
  });

  $(".drop-menu").click(function (e) {
    e.stopPropagation();
    $(this).toggleClass("is-active");
    $(".menu-wrap").toggleClass("open");
    $("body, html").toggleClass("overflow");
  });

  $(window).scroll(function () {
    var sticky = $(".top-scroll"),
      scroll = $(window).scrollTop();

    if (scroll >= 200) sticky.addClass("show");
    else sticky.removeClass("show");
  });

  $(".top-scroll").smoothScroll({
    speed: 1000,
  });

  AOS.init();
});
