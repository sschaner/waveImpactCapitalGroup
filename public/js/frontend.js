const howSection = document.querySelector(".how");
const item = document.querySelectorAll(".how__content");
const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -25px 0px",
};
var itemDelay = 1.75;

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

const observer = new IntersectionObserver(handler, appearOptions);

for (var i = 0; i < item.length; i++) {
  observer.observe(item[i]);
}
