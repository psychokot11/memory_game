document.addEventListener("DOMContentLoaded", () => {
  const cards = [
    {
      name: "fries",
      img: "src/img/fries.png",
    },
    {
      name: "cheeseburger",
      img: "src/img/cheeseburger.png",
    },
    {
      name: "hotdog",
      img: "src/img/hotdog.png",
    },
    {
      name: "ice-cream",
      img: "src/img/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "src/img/milkshake.png",
    },
    {
      name: "pizza",
      img: "src/img/pizza.png",
    },
    {
      name: "fries",
      img: "src/img/fries.png",
    },
    {
      name: "cheeseburger",
      img: "src/img/cheeseburger.png",
    },
    {
      name: "hotdog",
      img: "src/img/hotdog.png",
    },
    {
      name: "ice-cream",
      img: "src/img/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "src/img/milkshake.png",
    },
    {
      name: "pizza",
      img: "src/img/pizza.png",
    },
  ];

  cards.sort(() => 0.5 - Math.random());
  console.log(cards);

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenIds = [];
  let cardsWon = [];

  function createBoard() {
    for (let i = 0; i < cards.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "src/img/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cards[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute("src", cards[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
      console.log(cardsChosen);
    }
  }

  function checkForMatch() {
    const cardsForMatch = document.querySelectorAll("img");
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    if (optionOneId == optionTwoId) {
      alert("you have picked the same image!");
      cardsForMatch[optionOneId].setAttribute("src", "src/img/blank.png");
      cardsForMatch[optionTwoId].setAttribute("src", "src/img/blank.png");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      //alert("you have found a match");
      cardsForMatch[optionOneId].setAttribute("src", "src/img/white.png");
      cardsForMatch[optionTwoId].setAttribute("src", "src/img/white.png");
      cardsForMatch[optionOneId].removeEventListener("click", flipCard);
      cardsForMatch[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cardsForMatch[optionOneId].setAttribute("src", "src/img/blank.png");
      cardsForMatch[optionTwoId].setAttribute("src", "src/img/blank.png");
      alert("try again, loser 🤡");
    }
    cardsChosen = [];
    cardsChosenIds = [];
    resultDisplay.textContent = `Score: ${cardsWon.length}`;
    if (cardsWon.length === cards.length / 2) {
      resultDisplay.textContent = "Congrats! 🥳";
    }
  }

  createBoard();
});
