
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
const seltGuardian = new Card("Selt Guardian", 1400, 1100);
const cardsArray = [darkMagician, summonedSkull]

// showing cards in the DOM
const displayCardAvailable = (cardProp, index) => {
// console.log(card.name, card.ATK, card.DEF); ---- TESTING
let card = document.createElement("div")
card.innerHTML =  `${index} -${cardProp.name} - ${cardProp.ATK} - ${cardProp.DEF}`

const cardsContainer = document.querySelector(".cards_container")
cardsContainer.appendChild(card)
}
cardsArray.forEach(displayCardAvailable)

// When the button is clicked, it takes the value of the radio button
positionBtn = document.querySelector(".choose_btn").addEventListener("click", ()=> {
  const input = document.querySelector(".input_container input[type='radio']:checked")
  console.log(input.value);
})
