function initCarousel() {
  let carousel = document.querySelector('.carousel');
  let carouselInner = carousel.querySelector('.carousel__inner');
  let carouselSlide = carousel.querySelector('.carousel__slide');
  let carouselSlides = carousel.querySelectorAll('.carousel__slide');
  let carouselArrowLeft = carousel.querySelector('.carousel__arrow_left');
  let carouselArrowRight = carousel.querySelector('.carousel__arrow_right');

  //ширина слайда
  let carouselSlideWidth = carouselSlide.offsetWidth;
  //количество слайдов
  let clidesCount = carouselSlides.length;
  //позиция карусели
  let translateXPosition = 0;
  //скрываем кнопку влево
  carouselArrowLeft.style.display = 'none';
  
  
  carousel.addEventListener('click',function(event){
    let target = event.target;

    let moveLeft = function () {
      if (translateXPosition === 0) {
        return;
      }   
      translateXPosition = translateXPosition + carouselSlideWidth;
      carouselInner.style.transform = `translateX(${translateXPosition}px)`;
    };

    let moveRight = function () {
      if (translateXPosition === (-1 * (clidesCount - 1) * carouselSlideWidth)) {
        return;
      } 
      translateXPosition = translateXPosition - carouselSlideWidth;
      carouselInner.style.transform = `translateX(${translateXPosition}px)`; 
    };

    
    if (target.closest('.carousel__arrow_left')) {
      moveLeft();
    }

    if (target.closest('.carousel__arrow_right')) {
      moveRight();
    }

    if (translateXPosition === 0) {
      carouselArrowLeft.style.display = 'none';
    } else {
      carouselArrowLeft.style.display = 'flex';
    }

    if (translateXPosition === (-1 * (clidesCount - 1) * carouselSlideWidth)) {
      carouselArrowRight.style.display = 'none';
    } else {
      carouselArrowRight.style.display = 'flex';
    }   
    

  });

  
}
