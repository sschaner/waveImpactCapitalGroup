const howContent = document.querySelectorAll(".how__content");
const slideRight = document.querySelectorAll(".slide-right");
const slideLeft = document.querySelectorAll(".slide-left");
const contactItems = document.querySelectorAll(".contact__primary--item");
const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -25px 0px",
};
const slideOptions = {
  threshold: 0,
  rootMargin: "0px 0px -150px 0px",
};
const itemDelay = 1.2;
const observer = new IntersectionObserver(handler, appearOptions);
const slideInOnScroll = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      entry.target.classList.remove("slide-in");
      return;
    } else {
      entry.target.classList.add("slide-in");
      slideInOnScroll.unobserve(entry.target);
    }
  });
}, slideOptions);

function handler(entries, observer) {
  var itemLoad = 0;

  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      animate(entry.target);
      gsap.to(entry.target, {
        opacity: 1,
        delay: itemLoad * itemDelay,
        onComplete: animate(entry.target),
      });
      itemLoad++;

      observer.unobserve(entry.target);
    }
  });
}

function animate(element) {
  element.classList.add("loaded");
}

for (let i = 0; i < howContent.length; i++) {
  observer.observe(howContent[i]);
}

for (let i = 0; i < contactItems.length; i++) {
  observer.observe(contactItems[i]);
}

slideRight.forEach((slide) => {
  slideInOnScroll.observe(slide);
});

slideLeft.forEach((slide) => {
  slideInOnScroll.observe(slide);
});
