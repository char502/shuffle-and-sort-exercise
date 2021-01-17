console.log('This is a test');

const shuffleCards = () => {
  let cardContainer = document.getElementById('cardsGoHere');
  let shuffleContainer = document.createDocumentFragment();

  while (cardContainer.children.length) {
    shuffleContainer.appendChild(
      cardContainer.children[
        Math.floor(Math.random() * cardContainer.children.length)
      ]
    );
  }
  cardContainer.appendChild(shuffleContainer);
};

const sortCards = () => {
  let cardContainer = document.getElementById('cardsGoHere');
  let sortContainer = document.createDocumentFragment();

  let cardContainerArr = [...cardContainer.children];

  let sortResult = cardContainerArr.sort((a, b) => {
    if (a.textContent > b.textContent) return 1;
    if (a.textContent < b.textContent) return -1;
    return 0;
  });

  sortResult.forEach(divItem => sortContainer.appendChild(divItem));

  cardContainer.appendChild(sortContainer);
};
