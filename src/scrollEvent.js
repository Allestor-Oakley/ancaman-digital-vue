// thanks:
// https://webdesign.tutsplus.com/tutorials/animate-on-scroll-with-javascript--cms-36671

export default function scrollEvent() {
  const scrollElements = document.querySelectorAll(".scroll-reveal");

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
  };
}
