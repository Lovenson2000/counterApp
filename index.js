
let content = document.getElementById("content");
let integerValue = parseInt(content.innerHTML);

const arrayButton = document.querySelectorAll(".button-event");
arrayButton.forEach((button, index) => {
    button.addEventListener("click", () => {
        changeValue(index)
        })
    }
)

function changeValue(index) {
    switch (index) {
        case 0:
            integerValue -= 1;
            break;

        case 1:
            integerValue = 0;
            break;

        case 2:
            integerValue += 1;
            break;

        default:
            integerValue = 0;
    }
    content.innerHTML = integerValue;
}











