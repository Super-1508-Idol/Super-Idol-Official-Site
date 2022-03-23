//declaratie
const cardArray = [{
    name: 'ananas.png',
    img: 'images/ananas.png',
  },
  {
    name: 'ananas.png',
    img: 'images/ananas.png',
  },
  {
    name: 'peer.png',
    img: 'images/peer.png',
  },
  {
    name: 'peer.png',
    img: 'images/peer.png',
  },
  {
    name: 'druif.png',
    img: 'images/druif.png',
  },
  {
    name: 'druif.png',
    img: 'images/druif.png',
  },
  {
    name: 'kiwi.png',
    img: 'images/kiwi.png',
  },
  {
    name: 'kiwi.png',
    img: 'images/kiwi.png',
  },
  {
    name: 'appel.png',
    img: 'images/appel.png',
  },
  {
    name: 'appel.png',
    img: 'images/appel.png',
  },
  {
    name: 'banaan.png',
    img: 'images/banaan.png',
  },
  {
    name: 'banaan.png',
    img: 'images/banaan.png',
  },
]
//console.log(CardArray)
cardArray.sort(() => 0.5 - Math.random())
//console.log(cardArray);
const gridDisplay = document.getElementById('grid');
createBoard();

function createBoard() {
  for (let i = 0; i < 12; i++) {
    const card = document.createElement('img')
    card.setAttribute('src', 'images/dekje.png')
    card.setAttribute('data-id', i)
    card.setAttribute('width', '200px')
    console.log(card, i)
    gridDisplay.appendChild(card)
    card.addEventListener('click', flipCard)
  }
}

let cardChosen = [];
let cardChosenId = [];

function flipCard() {
  let cardId = this.getAttribute('data-id')
  cardChosen.push(cardArray[cardId].name)
  cardChosenId.push(cardId)
  console.log(cardArray[cardId].name)
  console.log(cardChosen)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardChosen.length === 2) {
    setTimeout(checkMatch, 500)
  }
}
const cardsWon = [];
let tries=0;
function checkMatch() {
  tries++;
  document.getElementById('tries').innerHTML=tries
  const cards = document.querySelectorAll('#grid img')
  const firstChosenID = cardChosenId[0]
  const secondChosenID = cardChosenId[1]
  console.log("check for match")
  if (firstChosenID == secondChosenID) {
    //alert('You clicked the same image!')
    cards[firstChosenID].setAttribute('src', 'images/dekje.png')
  } else if (cardChosen[0] == cardChosen[1]) {
    //alert('You found a match')
    cards[firstChosenID].setAttribute('src', 'images/wit.png')
    cards[secondChosenID].setAttribute('src', 'images/wit.png')
    cards[firstChosenID].removeEventListener('click', flipCard)
    cards[secondChosenID].removeEventListener('click', flipCard)
    cardsWon.push(cardChosen)
  } else {
    //alert('fout!')
    cards[firstChosenID].setAttribute('src', 'images/dekje.png')
    cards[secondChosenID].setAttribute('src', 'images/dekje.png')
  }
  cardChosen = []
  cardChosenId = []
  document.getElementById('result').innerHTML = cardsWon.length
  if (cardsWon.length == cardArray.length / 2) {
    document.getElementById('result').innerHTML = "Je speelde het spelletje uit!"

  }
}
