let header = document.getElementById('header');
window.onscroll = function headerBackground() {
  var scrolled = window.pageYOffset;
  if (scrolled > 35) {
    header.style.background = '#1d0e0eed';
  } else {
    header.style.background = '';
  }
};