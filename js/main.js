import { writeShowHideButton, hideCopy, buttonToggleBehavior } from './show-more.js';

// About
let aboutBlurb = document.querySelector('.about-blurb');
writeShowHideButton(aboutBlurb);
hideCopy(aboutBlurb);

// Featured
// let featuredBlurb = document.querySelector('.featured-release .description');
// writeShowHideButton(featuredBlurb);
// hideCopy(featuredBlurb);

let buttons = document.querySelectorAll('.show-more');
buttons.forEach
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttonToggleBehavior(button);
  });
});
