

//Getting the different placeholders

let content = document.getElementById("content");
let integerValue = parseInt(content.innerHTML);

const decreaseButton = document.getElementById("btn-decrease");
const resetButton = document.getElementById("btn-reset");
const increaseButton = document.getElementById("btn-increase");


//Increasing value when the increase button is clicked on
increaseButton.addEventListener("click", () => { 
    integerValue += 1;
    content.innerHTML = integerValue;
})

//Decreasing value when the decrease button is clicked on
decreaseButton.addEventListener("click", () => {
    integerValue -= 1;
    content.innerHTML = integerValue;
})

//Going back to the initial value when reset
resetButton.addEventListener("click", () => {
    integerValue = 0;
    content.innerHTML = integerValue;

})



