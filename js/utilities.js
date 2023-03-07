/**
 * functions to run utilities
 */

const generateRandomNumber = (range) => {
  const RANDOM_NUMBER = Math.floor(Math.random() * range);
  return RANDOM_NUMBER ? RANDOM_NUMBER : 1;
};

const checkLife = (life) => {
  if (life === 0) return true;
};

const disableAllBtn = (container) => {
  const btns = container.querySelectorAll(".btn");

  btns.forEach((btn) => {
    btn.disabled = true;
  });
};

const createElement = (tag, cls, atr, children) => {
  const element = document.createElement(tag);
  cls.forEach((e) => {
    element.classList.add(e);
  });

  if (atr !== "" || atr !== []) {
    atr.forEach((e) => {
      element.setAttribute(e[0], e[1]);
    });
  }

  children.forEach((child) => {
    if (typeof child === "string") {
      element.appendChild(document.createTextNode(child));
    } else {
      element.appendChild(child);
    }
  });

  return element;
};

export { generateRandomNumber, checkLife, disableAllBtn, createElement };
