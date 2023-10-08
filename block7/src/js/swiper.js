window.addEventListener('DOMContentLoaded', () => {

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function(className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    }

    const checker = function() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  }

  const someFunc = (instance) => {
    if (instance) {
      instance.on('slideChange', function (e) {
        console.log('*** mySwiper.activeIndex', instance.activeIndex);
      });
    }
  };

  resizableSwiper(
    '(max-width: 768px)',
    '.brands__names',
    {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          enabled: true,
        },
        320: {
          // slidesPerView: 1.1,
          slidesPerView: "auto",
          enabled: true,
        },
        350: {
          // slidesPerView: 1.3,
          slidesPerView: "auto",
          enabled: true,
        },
        390: {
          // slidesPerView: 1.5,
          slidesPerView: "auto",
          enabled: true,
        },
        540: {
          // slidesPerView: 2,
          slidesPerView: "auto",
          enabled: true,
        },
        620: {
          // slidesPerView: 2.2,
          slidesPerView: "auto",
          enabled: true,
        },
      },
    },
    someFunc
  );


  resizableSwiper(
    '(max-width: 768px)',
    '.equipment__types',
    {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          enabled: true,
        },
        320: {
          // slidesPerView: 1.1,
          slidesPerView: "auto",
          enabled: true,
        },
        350: {
          // slidesPerView: 1.3,
          slidesPerView: "auto",
          enabled: true,
        },
        390: {
          // slidesPerView: 1.5,
          slidesPerView: "auto",
          enabled: true,
        },
        540: {
          // slidesPerView: 2,
          slidesPerView: "auto",
          enabled: true,
        },
        620: {
          // slidesPerView: 2.2,
          slidesPerView: "auto",
          enabled: true,
        },
      },
    },
    someFunc
  );

  resizableSwiper(
    '(max-width: 768px)',
    '.prices__block',
    {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          enabled: true,
        },
        320: {
          // slidesPerView: 1.1,
          slidesPerView: "auto",
          enabled: true,
        },
        350: {
          // slidesPerView: 1.3,
          slidesPerView: "auto",
          enabled: true,
        },
        390: {
          // slidesPerView: 1.5,
          slidesPerView: "auto",
          enabled: true,
        },
        540: {
          // slidesPerView: 2,
          slidesPerView: "auto",
          enabled: true,
        },
        620: {
          // slidesPerView: 2.2,
          slidesPerView: "auto",
          enabled: true,
        },
      },
    },
    someFunc
  );

});

