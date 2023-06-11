
let content = document.getElementById("content");
let integerValue = parseInt(content.innerHTML);

const arrayButton = document.getElementsByClassName("button-event");
const buttons = Object.entries(arrayButton);
buttons.forEach((button, index) => {
    function changeValue(button, index) {
        switch (index) {
            case 0:
                button = document.getElementById("btn-decrease").addEventListener("click", () => {
                    integerValue -= 1;
                    content.innerHTML = integerValue;
                })
                break;
    
            case 1:
                button = document.getElementById("btn-reset").addEventListener("click", () => {
                    integerValue = 0;
                    content.innerHTML = integerValue;
                })
                break;
    
            case 2:
                button = document.getElementById("btn-increase").addEventListener("click", () => {
                    integerValue += 1;
                    content.innerHTML = integerValue;
                })
            }
        }

    changeValue(button, index);
    
    }
)









