const cards = ["Guadalupe", "Ollie", "Aki"];

function writeCards(cards) {
  for (let i = 0; i < cards.length; i++) {
    console.log(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
    debugger;
  }

  return cards;
}

writeCards(cards);

let countDown = 10;
while (countDown > -1) {
  console.log(countDown--);
}

