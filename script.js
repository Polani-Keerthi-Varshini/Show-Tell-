const cursorRounded = document.querySelector('.rounded');
const cursorPointed = document.querySelector('.pointed');

const moveCursor = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
  
  cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  
  cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
}

window.addEventListener('scroll', function() {
  var videoContainer = document.querySelector('.video-container');
  var scrollPosition = window.scrollY;
  videoContainer.style.bottom = 20 + scrollPosition / 2 + 'px'; // Adjust the speed by changing the division value
});
