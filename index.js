
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
console.log(darkMagician);



// When the button is clicked, it takes the value of the radio button
positionBtn = document.querySelector(".choose_btn").addEventListener("click", ()=> {

  const input = document.querySelector(".input_container input[type='radio']:checked")
  console.log(input.value);
})
