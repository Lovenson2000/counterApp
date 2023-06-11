
let content = document.getElementById("content");
let integerValue = parseInt(document.getElementById("content").innerHTML);

const arrayButton = document.getElementsByTagName("button");
const buttons = Object.entries(arrayButton);
buttons.forEach((button, index) => {

    if (index === 0) {    //Decrease by -1 for index 0
        button = document.getElementById("btn-decrease").addEventListener("click", () => {
            integerValue -= 1;
            content.innerHTML = integerValue;
        })
    }
    else if (index === 1) {     // Reset to 0 for index 1
        button = document.getElementById("btn-reset").addEventListener("click", () => {
            integerValue = 0;
            content.innerHTML = integerValue;
        })
    }
    else if(index === 2) {     //Increase by 1 for index 2
        button = document.getElementById("btn-increase").addEventListener("click", () => {
            integerValue += 1;
            content.innerHTML = integerValue;
        })      
    }
})






