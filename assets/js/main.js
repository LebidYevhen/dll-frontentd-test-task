const burgers = document.querySelectorAll('.menu-icon');
const menu = document.querySelector('.menu-burger');
const body = document.querySelector('body');

if (burgers && menu) {
  burgers.forEach(currentBurger => {
    currentBurger.addEventListener('click', () => {
      burgers.forEach(burger => {
        burger.classList.toggle('--active');
      })
      menu.classList.toggle('--active');
      body.classList.toggle('--lock');
    })
  })
}

// Select2
$(document).ready(function () {
  $('.gender').select2({
    minimumResultsForSearch: -1,
    width: '100%',
    placeholder: 'Gender',
  });
});

// Animate
function animateCircle(circle) {
  anime({
    targets: circle,
    translateY: '110%',
    translateX: [-100, 100],
    easing: 'easeInOutSine',
    duration: anime.random(5000, 10000),
    complete: function(anim) {
      anim.restart();
    }
  });
}

function startAnimations() {
  const circles = document.querySelectorAll('.snow circle');
  circles.forEach(function(circle) {
    animateCircle(circle);
  });
}

startAnimations();
