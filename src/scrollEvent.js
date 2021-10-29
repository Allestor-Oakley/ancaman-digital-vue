// thanks:
// https://webdesign.tutsplus.com/tutorials/animate-on-scroll-with-javascript--cms-36671

export default function scrollEvent() {
  const scrollElements = document.querySelectorAll(".scroll-reveal");
    let throttleTimer = false;

    const throttle = (callback, time) => {
      //don't run the function while throttle timer is true
      if (throttleTimer) return;

      //first set throttle timer to true so the function doesn't run
      throttleTimer = true;

      setTimeout(() => {
        //call the callback function in the setTimeout and set the throttle timer to false after the indicated time has passed
        callback();
        throttleTimer = false;
      }, time);
    };

  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };

  const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
      elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add("scrolled");
  };

  const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
  };

  const backToTop = document.getElementById("to-top");
  const showBackToTop = () => {
    if (window.scrollY >= 98) {
      backToTop.classList.add("visible-to-top");
    } else {
      backToTop.classList.remove("visible-to-top");
    }
  };
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      } else if (elementOutofView(el)) {
        hideScrollElement(el);
      }
    });
  };
  return {
    scrollElements,
    handleScrollAnimation,
    showBackToTop,
    throttle
  };
}
