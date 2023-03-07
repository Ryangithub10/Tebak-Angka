// import
import {
  createElement,
  checkLife,
  generateRandomNumber,
  disableAllBtn,
} from "./js/utilities.js";

// element
const resultTxt = document.querySelector(".result-text");
const btnContainer = document.querySelector(".btn-container");

// function
const generateBtnNumber = (container) => {
  for (let i = 49; i < 58; i++) {
    const number = String.fromCharCode(i);
    const btn = createElement("button", ["btn"], [], [number]);
    container.appendChild(btn);
  }
};

const compareNumber = (choiceNumber, comparator) => {
  const IS_NUMBER_LOWER_THAN_ANSWER = choiceNumber < comparator;
  const IS_NUMBER_GREATER_THAN_ANSWER = choiceNumber > comparator;
  const SMALL_AND_BIG = IS_NUMBER_LOWER_THAN_ANSWER ? "kecil" : "besar";

  if (!IS_NUMBER_LOWER_THAN_ANSWER && !IS_NUMBER_GREATER_THAN_ANSWER) {
    resultTxt.innerText = `SELAMAT!!! Jawaban anda benar! Yaitu ${comparator}. Refresh kembali browser untuk memainkannya lagi`;
    disableAllBtn(btnContainer);
    return true;
  }

  life -= 1;
  resultTxt.innerText = `angka yang kamu masukan terlalu ${SMALL_AND_BIG}, kesempatan mu tinggal lagi ${life}`;
};

const gameOver = (checkLifeFunc) => {
  if (checkLifeFunc(life)) {
    resultTxt.innerText = `yahhh, sayang sekali kamu gagal! Jawaban yang benar adalah ${FIXED_NUMBER}. Refresh kembali browser untuk memainkannya lagi`;
    disableAllBtn(btnContainer);
  }
};

const gameInit = () => {
  const btns = document.querySelectorAll(".btn");

  btns.forEach((btn) => {
    btn.onclick = () => {
      choiceNumber = btn.innerText;
      compareNumber(choiceNumber, FIXED_NUMBER);
      gameOver(checkLife);
    };
  });
};

// variable
let life = 3;
let choiceNumber;
const FIXED_NUMBER = generateRandomNumber(9);

window.onload = () => {
  generateBtnNumber(btnContainer);
  gameInit();
};
