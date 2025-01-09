function createSquares(num) {
    const container = document.getElementById("cont");
    for (let i = 0; i < num; i++) {
        container.innerHTML += '<div class="box"></div>'
    }
}

createSquares(256);
