const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const cardWidth = slider.querySelector('.card').offsetWidth + 16; // Card width + gap
let scrollAmount = 0;

// Function to slide next
function slideNext() {
  const maxScroll = slider.scrollWidth - slider.offsetWidth;
  if (scrollAmount < maxScroll) {
    scrollAmount += cardWidth;
  } else {
    scrollAmount = 0; // Reset to start
  }
  slider.style.transform = `translateX(-${scrollAmount}px)`;
  updateButtons();
}

// Function to slide previous
function slidePrev() {
  if (scrollAmount > 0) {
    scrollAmount -= cardWidth;
  } else {
    scrollAmount = 0;
  }
  slider.style.transform = `translateX(-${scrollAmount}px)`;
  updateButtons();
}

// Update button states
function updateButtons() {
  prevBtn.disabled = scrollAmount === 0;
  const maxScroll = slider.scrollWidth - slider.offsetWidth;
  nextBtn.disabled = scrollAmount >= maxScroll;
}

// Auto-slide functionality
let autoSlideInterval = setInterval(slideNext, 3000); // Slide every 3 seconds

// Event listeners for manual navigation
nextBtn.addEventListener('click', () => {
  slideNext();
  resetAutoSlide();
});

prevBtn.addEventListener('click', () => {
  slidePrev();
  resetAutoSlide();
});

// Reset auto-slide when buttons are clicked
function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(slideNext, 3000);
}

// Initialize button states
updateButtons();



