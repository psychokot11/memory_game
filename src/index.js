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

  function createBoard() {
    for (let i = 0; i < cards.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "src/img/blank.png");
      card.setAttribute("data-id", i);
      grid.appendChild(card);
    }
  }

  createBoard();
});
