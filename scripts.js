const boxSelectorButton = document.createElement("button");
boxSelectorButton.textContent = "Click Me to change grid size!";
document.body.insertBefore(boxSelectorButton, document.body.firstChild);

const instructions = document.createElement("p");
instructions.textContent = "Click and hold to sketch!"
document.body.insertBefore(instructions, boxSelectorButton);

const container = document.getElementById("cont");

function createSquares(num) {
    container.innerHTML = '';
    const columns = Math.ceil(Math.sqrt(num));
    const boxSize = 100/columns;
    for (let i = 0; i < num; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.flex = `1 1 calc(${boxSize}%)`;
        container.appendChild(box);
    }

    const boxes = document.querySelectorAll(".box")

    boxes.forEach(box => {
        box.style.backgroundColor = "lightgray";
    })
// Making the painting work on mouse hold
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
}

createSquares(256);

boxSelectorButton.addEventListener("click", () => {
    let numSquares = parseInt(prompt("Select the number of squares on each side from 1-100", ''));
    createSquares(numSquares**2);
})






