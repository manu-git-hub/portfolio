import anime from 'animejs/lib/anime.es.js';

const initAnimation = () => {
  anime.timeline({ loop: true })
    .add({
      targets: '.ml9 .letter',
      scale: [0, 1],
      duration: 1500,
      elasticity: 600,
      delay: (el, i) => 45 * (i + 1)
    }).add({
      targets: '.ml9',
      opacity: 50,
      duration: 4000,
      easing: "easeOutExpo",
      delay: 1000
    });
};

const wrapLetters = () => {
  const textWrapper = document.querySelector('.ml9 .letters');
  if (textWrapper) {
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  }
};

export { initAnimation, wrapLetters };
