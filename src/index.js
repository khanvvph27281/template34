function toggleMenu() {
    const menuItems = document.getElementById('menuItems');
    menuItems.classList.toggle('hidden');
  }
  
  function handleResize() {
    const menuItems = document.getElementById('menuItems');
    if (window.innerWidth >= 1024) {
      menuItems.classList.remove('hidden');
    } else {
      menuItems.classList.add('hidden');
    }
  }
  
  function initializeMenu() {
    const menuToggle = document.getElementById('menuToggle');
    menuToggle.addEventListener('click', toggleMenu);
    window.addEventListener('load', handleResize);
    window.addEventListener('resize', handleResize);
  }
  
  initializeMenu();

  document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
  
    new SlickSlider(slider, {
      autoplay: true,
      dots: true,
      prevArrow: '<button type="button" class="slick-prev">Previous</button>',
      nextArrow: '<button type="button" class="slick-next">Next</button>'
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const sliderContainer = slider.querySelector('.slider-container');
    const prevButton = slider.querySelector('.slider-prev');
    const nextButton = slider.querySelector('.slider-next');
    const sliderItems = slider.querySelectorAll('.slider-item');
    const itemWidth = slider.offsetWidth / 3; /* Chiều rộng của mỗi ảnh */
    let currentPosition = 0;
  
    function slideToNext() {
      currentPosition -= itemWidth;
      if (currentPosition < -itemWidth * (sliderItems.length - 1)) {
        currentPosition = 0;
      }
      sliderContainer.style.transform = `translateX(${currentPosition}px)`;
    }
  
    function slideToPrev() {
      currentPosition += itemWidth;
      if (currentPosition > 0) {
        currentPosition = -itemWidth * (sliderItems.length - 1);
      }
      sliderContainer.style.transform = `translateX(${currentPosition}px)`;
    }
  
    nextButton.addEventListener('click', function() {
      slideToNext();
    });
  
    prevButton.addEventListener('click', function() {
      slideToPrev();
    });
  });