const counters = document.querySelectorAll('.number-ticker');
const animationDuration = 2000; 
const fps = 60; 

const animateCounter = (counter, startTime) => {
  const value = +counter.getAttribute('akhi');
  const currentTime = Date.now();
  const elapsedTime = currentTime - startTime;
  
  if (elapsedTime < animationDuration) {
    const progress = elapsedTime / animationDuration;
    counter.innerText = Math.round(progress * value);
    requestAnimationFrame(() => animateCounter(counter, startTime));
  } else {
    counter.innerText = value;
  }
};

const startAnimation = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const startTime = Date.now();
      animateCounter(counter, startTime);
      observer.unobserve(counter);
    }
  });
};

const observer = new IntersectionObserver(startAnimation, {
  root: null,
  threshold: 0.1 
});

counters.forEach(counter => {
  counter.innerText = '0';
  observer.observe(counter);
});