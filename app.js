// Fade in header
window.onload = function() {
    fadeIn();
  };

function fadeIn() {
    var element = document.getElementById("myHeader");
    var opacity = 0;
    var intervalID = setInterval(function() {
      if (opacity < 1) {
        opacity += 0.05;
        element.style.opacity = opacity;
      } else {
        clearInterval(intervalID);
      }
    }, 50); // Change the interval (50ms) to speed up/slow down the fade
  }

// Smooth navigation transition
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});