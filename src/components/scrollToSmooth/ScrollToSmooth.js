// import React from 'react';
const ScrollToSmooth = (target, marginOffset) => {
   if (target) {
      if (typeof target == 'number') {
         window.scrollTo({
            top: target,
            behavior: 'smooth',
         });
      } else {
         let elDistanceToTop = window.pageYOffset + target.getBoundingClientRect().top;
         window.scrollTo({
            top: marginOffset ? elDistanceToTop - marginOffset : elDistanceToTop,
            behavior: 'smooth',
         });
      }
   } else {
      return;
   }
};

export default ScrollToSmooth;
