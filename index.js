

positionBtn = document.querySelector(".choose_btn").addEventListener("click", ()=> {

  const input = document.querySelector(".input_container input[type='radio']:checked")
  console.log(input.value);
})
