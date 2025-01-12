const container = document.getElementById("cont");

function createSquares(num) {
    for (let i = 0; i < num; i++) {
        container.innerHTML += '<div class="box"></div>'
    }
}

createSquares(256);


const boxes = document.querySelectorAll(".box")

boxes.forEach(box => {
    box.style.backgroundColor = "lightgray";
})

let isMouseClicked = false;

document.addEventListener("mousedown", () => {
    isMouseClicked = true;
})

document.addEventListener("mouseup", () => {
    isMouseClicked = false;
})

boxes.forEach(box => {
    box.addEventListener("mouseover", () => {
        if (isMouseClicked) {
            box.style.backgroundColor = "black";
        }
    });
});

const boxSelectorButton = document.createElement("button");
boxSelectorButton.textContent = "Click Me to begin!";
document.body.insertBefore(boxSelectorButton, document.body.firstChild);

boxSelectorButton.addEventListener("click", () => {
    let squaresNumber = parseInt(prompt("How many squares per side for the new grid?", ''));
    container.innerHTML = '';
    console.log(squaresNumber)
    createSquares(squaresNumber**2); //fix this

})
