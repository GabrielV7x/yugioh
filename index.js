
// Creating a card class
class Card {
  constructor(name, ATK, DEF) {
    this.name = name;
    this.ATK = ATK;
    this.DEF = DEF;
  }
}

//Creating cards
const darkMagician = new Card("Dark Magician", 2500, 2100);
const summonedSkull = new Card("Summoned Skull", 2500, 1200);
const cardsArray = [darkMagician, summonedSkull]


// showing cards in the DOM
const showCard = (card, index) => {
// console.log(card.name, card.ATK, card.DEF); ---- TESTING
let newCard = document.createElement("div")
newCard.innerHTML =  `${card.name} - ${card.ATK} - ${card.DEF}`

const cardContainer = document.querySelector(".card_container")
cardContainer.appendChild(newCard)
}

// calling showCard function on line 19.
const cardProcessed =  cardsArray.forEach(showCard)




// When the button is clicked, it takes the value of the radio button
positionBtn = document.querySelector(".choose_btn").addEventListener("click", ()=> {
  const input = document.querySelector(".input_container input[type='radio']:checked")
  console.log(input.value);
})
