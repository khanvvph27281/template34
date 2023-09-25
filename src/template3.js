function toggleMobileMenu() {
    const menuReponsive = document.querySelector(".menu");
    const Reponsive = document.querySelector(".repon_menu");

    menuReponsive.addEventListener('click', () => {
        Reponsive.classList.toggle('mobile-menu');
        menuReponsive.classList.toggle('button-respon');
    });
}

function initializeSlider() {
    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        prevArrow: $(".prevv"),
        nextArrow: $(".nextt"),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerPadding: '0',
                    slidesToShow: 2,
                }
            }
        ]
    });
}

function initializeSecondSlider() {
    $('.slider-click').slick({
        centerMode: true,
        centerPadding: '15%',
        slidesToShow: 2.5,
        slidesToScroll: 1,
        prevArrow: $(".prev"),
        nextArrow: $(".next"),
        responsive: [{
            breakpoint: 1024,
            settings: {
                centerPadding: '10%',
                slidesToShow: 1,
            }
        }]
    });

    $('.slider-click').on('afterChange', function (event, slick, currentSlide) {
        $('.slider_add').removeClass('selected');
        $('.slider_add').eq(currentSlide + 2).addClass('selected');
    });
}

// Call the functions to initialize
toggleMobileMenu();
initializeSlider();
initializeSecondSlider();
