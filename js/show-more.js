export const moreText = 'Show More';
export const lessText = 'Show Less';
export const divideBy = 1.5;

export function writeShowHideButton(parent) {
  let button = document.createElement("button");
  let text = document.createTextNode(moreText);
  let parentClass = parent.className;
  button.appendChild(text);
  button.classList.add("show-more", parentClass + '-toggle');
  parent.after(button);
}

export function hideCopy(parent) {
  let height = parent.offsetHeight;
  parent.style.height = height / divideBy + 'px';
  parent.classList.add('truncated');
}

export function buttonToggleBehavior(button) {
  let currentText = button.innerHTML;
  let previous = button.previousElementSibling;
  let blurb = document.getElementById(previous.id);
  let height = blurb.offsetHeight;
  

  if (blurb.classList.contains('expanded')) {
    blurb.classList.remove("expanded");
    blurb.classList.add("truncated");
    blurb.style.height = height / 1.5 + 'px';
  } else {
    blurb.classList.add("expanded");
    blurb.classList.remove("truncated");
    blurb.style.height = height * 1.5 + 'px';
  }
  

  if (currentText == moreText) {
    button.innerHTML = lessText;
  } else {
    button.innerHTML = moreText;
  }
}