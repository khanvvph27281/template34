
const menuReponsive = document.querySelector(".menu-button")
const Reponsive = document.querySelector(".menu-reponsive")
menuReponsive.addEventListener('click', () => {
  Reponsive.classList.toggle('mobile-menu')
  menuReponsive.classList.toggle('mobile-menu')
})

  function initializeSlider() {
    var slider = $('.image-slider').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.5
          }
        },
        {
          breakpoint: 1028,
          settings: {
            slidesToShow: 2
          }
        }
      ],
      arrows: false
    });
  
    $('.slick-prev').click(function() {
      slider.slick('slickPrev');
    });
  
    $('.slick-next').click(function() {
      slider.slick('slickNext');
    });
  }
  
  $(document).ready(function() {
    initializeSlider();
  });
  //slide anh2
  function initializeCarousel() {
    var $carousel = $('.carousel');

    $carousel.slick({
        dots: true,
        dotsClass: 'slick-dots',
        centerMode: false,
        slidesToShow: 4,
        prevArrow: false,
        nextArrow: false,
        customPaging: function (slider, i) {
            return '<button class="dot"></button>'; // Sử dụng dấu chấm thay vì số
        },
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: false,
                    slidesToShow: 1
                }
            },
            {
              breakpoint: 1028,
              settings: {
                  arrows: false,
                  centerMode: false,
                  slidesToShow: 2
              }
          },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: false,
                    slidesToShow: 1
                }
            }
        ]
    }).on('afterChange', function (event, slick, currentSlide) {
        // Remove any previously added CSS classes

        // Check if it's the first or last slide
        if (currentSlide === 0) {
            $('#prevBtn').prop('disabled', true);
        } else {
            $('#prevBtn').prop('disabled', false);
        }

        if (currentSlide === slick.slideCount - 1) {
            $('#nextBtn').prop('disabled', true);
        } else {
            $('#nextBtn').prop('disabled', false);
        }
    });

    $("#prevBtn").on("click", function () {
        $carousel.slick('slickPrev');
    });

    $("#nextBtn").on("click", function () {
        $carousel.slick('slickNext');
    });
}

$(document).ready(function () {
    initializeCarousel();
});
//slide ảnh 3
function initializeSlickSlider() {
  $(".slider").slick({
      centerMode: true,
      centerPadding: '14%', // Đặt khoảng cách giữa hai đầu của slider
      slidesToShow: 2.5,
      slidesToScroll: 1,
      prevArrow: $(".slick-prevv"),
      nextArrow: $(".slick-nextt"),
      responsive: [
          {
              breakpoint: 768,
              settings: {
                  centerPadding: '0',
                  slidesToShow: 1,
              }
          },
          {
              breakpoint: 1028,
              settings: {
                  centerPadding: '0',
                  slidesToShow: 2,
              }
          }
      ]
  });
}

$(document).ready(function () {
  initializeSlickSlider();
});

  //slide cuối trang 
  const images = document.querySelectorAll('.image-viewer img');
        const dots = document.querySelectorAll('.dot');
        const links = document.querySelectorAll('.link');
        let currentIndex = 0;

        function showImage(index) {
            images.forEach((img) => {
                img.style.display = 'none';
            });

            dots.forEach((dot) => {
                dot.classList.remove('active-dot');
                dot.classList.remove('active')
            });

            images[index].style.display = 'block';
            dots[index].classList.add('active-dot');

            links.forEach((link, i) => {
                if (i === index) {
                    link.classList.add('active-link');
                } else {
                    link.classList.remove('active-link');
                }
            });
        }
        showImage(currentIndex);

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                showImage(currentIndex);
            });
        });

        links.forEach((link, index) => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                currentIndex = index;
                showImage(currentIndex);
            });
        });
  // ẩn hiện div
 // Lấy danh sách tất cả các button và các div
 const toggleButtons = document.querySelectorAll(".toggle-button");
 const contents = document.querySelectorAll(".content");

 // Thêm sự kiện click cho mỗi button
 toggleButtons.forEach(function (button, index) {
     button.addEventListener("click", function () {
         // Lấy tham chiếu đến phần tử div tương ứng
         const targetContent = contents[index];

         // Toggle trạng thái hiển thị của nội dung
         targetContent.classList.toggle("hidden");

         // Thay đổi nội dung của nút "Hiện" và "Ẩn"
         const imgSrc = targetContent.classList.contains("hidden")
             ? '<img src="../image/Frame 9197.png" alt="">'
             : '<img src="../image/Frame 9197 (1).png" alt="">';

         // Gán nội dung mới cho nút
         button.innerHTML = imgSrc;
     });
 });
  //slide ảnh 3
  $(document).ready(function () {
    $(".slider").slick({
        centerMode: true,
        centerPadding: '14%', // Đặt khoảng cách giữa hai đầu của slider
        slidesToShow: 2.5,
        slidesToScroll: 1,
        prevArrow: $(".slick-prevv"),
        nextArrow: $(".slick-nextt"),
        responsive: [
            {
                breakpoint: 768, // Điều này sẽ áp dụng khi màn hình có độ rộng ít hơn 768px
                settings: {
                    centerPadding: '0',
                    slidesToShow: 1, // Hiển thị 2 slide đầy đủ
                }
            },
            {
                breakpoint: 1028, // Điều này sẽ áp dụng khi màn hình có độ rộng ít hơn 768px
                settings: {
                    centerPadding: '0',
                    slidesToShow: 2, // Hiển thị 2 slide đầy đủ
                }
            }
        ]
    });
});