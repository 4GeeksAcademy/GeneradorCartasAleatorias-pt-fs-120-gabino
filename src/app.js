import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



window.onload = function () {
  generateRandomCard();
  document.getElementById('newCardBtn').addEventListener('click', generateRandomCard);
  setInterval(generateRandomCard, 10000); // 10000 milisegundos = 10 segundos
};

function generateRandomCard() {
  const suits = ['♥', '♠', '♣', '♦'];
  const suitClasses = ['heart', 'spade', 'club', 'diamond'];
  const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  const randomSuitIndex = Math.floor(Math.random() * suits.length);
  const randomValueIndex = Math.floor(Math.random() * values.length);

  const suitSymbol = suits[randomSuitIndex];
  const suitClass = suitClasses[randomSuitIndex];
  const cardValue = values[randomValueIndex];

  const cardElement = document.querySelector('.card');
  const topSuitElement = document.querySelector('.top-suit');
  const numberElement = document.querySelector('.number');
  const bottomSuitElement = document.querySelector('.bottom-suit');

  suitClasses.forEach(c => cardElement.classList.remove(c));
  cardElement.classList.add(suitClass);

  topSuitElement.innerHTML = suitSymbol;
  numberElement.innerHTML = cardValue;
  bottomSuitElement.innerHTML = suitSymbol;
}
