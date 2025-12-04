(function ($) {
  

  function SliderSet(name, slidetoShow, slidetoScroll, fade, infinite, autoplay, vertical, mobileSlidetoShow1024, mobileSlidetoShow600, mobileSlidetoShow480) {
    var $status = $('.pagingInfo');
    var $slickElement = $(name);
    $slickElement.slick({
      slidesToShow: slidetoShow,
      slidesToScroll: slidetoScroll,
      autoplaySpeed: 2000,
      lazyLoad: 'progressive',
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
      arrows: true,
      fade: fade,
      vertical: vertical || false,
      autoplay: autoplay,
      speed: 1000,
      infinite: infinite,
      cssEase: "linear",
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: mobileSlidetoShow1024, //
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: mobileSlidetoShow600,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: mobileSlidetoShow480,
            slidesToScroll: 1
          }
        }
      ],
    });
  }

  function loader() {
    document.getElementById('loader').style.display = 'none';
  }

  function imgSet() {
    $('[data-imgurl]').each(function () {
      var $this = $(this),
        ele = $this.attr('src'),
        attData = $this.data('imgurl');

      if (ele !== undefined) {
        $this.attr('src', attData);
      } else {
        $this.css({
          "background-image": 'url(' + attData + ')'
        });
      }
      $this.removeAttr('data-imgurl', '');
    });
  }



  imgSet();
  SliderSet('.partnerslider', 6, 1, false, true, true, false, 4, 2, 2);
  SliderSet('.ser_slider', 4, 1, false, false, false, false, 3, 2, 1);
  SliderSet('.portfolio_slide', 4, 1, false, true, true, false, 2, 1, 1);
  SliderSet('.slide-case-studies-list', 3, 1, false, true, true, false, 3, 2, 1);
  SliderSet('.banner-slide', 1, 1, false, true, true);
  $('.testimonial_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    dots: false,
    autoplaySpeed: 0,
    arrows: false,
    speed: 20000,
    cssEase: 'linear',
    Swiping: true,
    vertical: true,
    verticalSwiping: true,
    margin: 0,
    responsive: [{
        breakpoint: 1366,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });

})(jQuery);