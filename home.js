const sliderInput = document.querySelector('.slider__input');
const sliderImage = document.querySelector('.slider__image');


function debounce(func, delay) {
    let timeoutId;
    return function() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, arguments);
      }, delay);
    };
  }

  function handleSliderChange() {
    const imageSize = sliderInput.value;
    const imageUrl = `https://via.placeholder.com/${imageSize}x${imageSize}`;
    

    sliderImage.setAttribute('src', imageUrl);
  }
  const debouncedHandleSliderChange = debounce(handleSliderChange, 300);
  sliderInput.addEventListener('input', debouncedHandleSliderChange);




  const box = document.getElementById('box');


  function moveBox(x, y) {
    box.style.transform = `translate(${x}px, ${y}px)`;
  }
  
  const debouncedMoveBox = _.debounce(moveBox, 500);

  document.addEventListener('mousemove', (event) => {
    debouncedMoveBox(event.clientX, event.clientY);
  });