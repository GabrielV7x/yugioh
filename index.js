

// console.log(inputs);

positionChoosen = document.querySelector(".choose_btn").addEventListener("click", function(e) {
  console.log(e.target.innerHTML);

  const input = document.querySelector(".input_container input[type='radio']:checked")
  console.log(input);
})
