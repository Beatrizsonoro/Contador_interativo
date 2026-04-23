const numeroEl = document.getElementById("numero");
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const resetBtn = document.getElementById("reset");

let numero = 0;

addBtn.addEventListener("click", function() {
    numero++;
    numeroEl.textContent = numero;
});

subBtn.addEventListener("click", function() {
    numero--;
    numeroEl.textContent = numero;
});

resetBtn.addEventListener("click", function() {
    numero = 0;
    numeroEl.textContent = numero;
});