// element
const resultTxt = document.querySelector(".result-text");
const btnContainer = document.querySelector(".btn-container");

// function
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

const generateBtnNumber = (container) => {
  for (let i = 49; i < 58; i++) {
    const number = String.fromCharCode(i);
    const btn = createElement("button", ["btn"], [], [number]);
    container.appendChild(btn);
  }
};

const compareNumber = (number) => {
  const IS_NUMBER_LOWER_THAN_ANSWER = number < FIXED_NUMBER;
  const IS_NUMBER_GREATER_THAN_ANSWER = number > FIXED_NUMBER;
  const SMALL_AND_BIG = IS_NUMBER_LOWER_THAN_ANSWER ? "kecil" : "besar";

  if (!IS_NUMBER_LOWER_THAN_ANSWER && !IS_NUMBER_GREATER_THAN_ANSWER) {
    resultTxt.innerText = `SELAMAT!!! Jawaban anda benar! Yaitu ${FIXED_NUMBER}. Refresh kembali browser untuk memainkannya lagi`;
    disableAllBtn();
    return true;
  }

  life -= 1;
  resultTxt.innerText = `angka yang kamu masukan terlalu ${SMALL_AND_BIG}, kesempatan mu tinggal lagi ${life}`;
};

const checkLife = (life) => {
  if (life === 0) {
    resultTxt.innerText = `yahhh, sayang sekali kamu gagal! Jawaban yang benar adalah ${FIXED_NUMBER}. Refresh kembali browser untuk memainkannya lagi`;
    disableAllBtn();
  }
};

const disableAllBtn = () => {
  const btns = document.querySelectorAll(".btn");

  btns.forEach((btn) => {
    btn.disabled = true;
  });
};

const gameInit = () => {
  const btns = document.querySelectorAll(".btn");
  btns.forEach((btn) => {
    btn.onclick = () => {
      choiceNumber = btn.innerText;
      compareNumber(choiceNumber);
      checkLife(life);
    };
  });
};

const generateRandomNumber = (range) => Math.floor(Math.random() * range);

// variable
let life = 3;
let choiceNumber;
const FIXED_NUMBER = generateRandomNumber(9);

window.onload = () => {
  generateBtnNumber(btnContainer);
  gameInit();
};
