const leftDice = document.querySelector(".img1");
const rightDice = document.querySelector(".img2");
const h1 = document.querySelector("h1");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  let randomImage = `images/dice${randomNumber1}.png`;
  let randomImage2 = `images/dice${randomNumber2}.png`;

  let left = leftDice.setAttribute("src", randomImage);
  let right = rightDice.setAttribute("src", randomImage2);

  if (randomNumber1 > randomNumber2) {
    h1.innerHTML = "Player 1 wins";
  } else if (randomNumber1 < randomNumber2) {
    h1.innerHTML = "Player 2 wins";
  } else {
    h1.innerHTML = "It is a draw";
  }
});
