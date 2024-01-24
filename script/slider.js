// Получаем элементы слайдера
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('.slider__new'));
const slideCount = slides.length;
let slideIndexOne = 0;
let slideIndexTwo = 1;

let maxSlideIndexOne = slideCount - 2;
let maxSlideIndexTwo = slideCount - 1;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
    if(slideIndexTwo === 1){
      updateSlider();
    } else {
        slideIndexOne -= 1;
        slideIndexTwo -= 1;
        updateSlider();
        slides[slideIndexOne].style.animation = 'slide-left 1s ease-in-out both';
    }  

}

// Функция для показа следующего слайда
function showNextSlide() {
    if(slideIndexTwo === maxSlideIndexTwo){
        slides[slideIndex].style.animation = 'slide-left 1s ease-in-out reverse both';
        updateSlider();
    } else {
        
        slideIndexOne += 1;
        slideIndexTwo += 1;   
        slides[slideIndexOne].style.animation = 'slide-left 1s ease-in-out both';     
        updateSlider();
    }
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndexOne || index === slideIndexTwo) {
      // slide.style.animation = 'slide-left 1s ease-in-out both';
      slide.style.display = 'flex'; 
    } else {
      
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();