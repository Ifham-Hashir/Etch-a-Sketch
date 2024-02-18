const container = document.querySelector(".container");
const sketchScreen = document.querySelector(".sketch-screen");
let n = 16;
createSketch();

const setGridBtn = document.querySelector(".set-grid");
setGridBtn.addEventListener("click", () => {
  removeGrids();
  n = parseInt(prompt("Enter value of rows or columns > 0 and < 100"));
  while (n > 100 || n <= 0 || (isNaN(n))){
    alert("Invalid input:");
    n = parseInt(prompt("Enter value of row(s) or column(s) > 0 and < 100"));
  }
  createSketch();
});

function removeGrids() {
  while(sketchScreen.firstChild){
    sketchScreen.removeChild(sketchScreen.firstChild);
  }
}

function createSketch() {
  function createGrids(n) {
    for (let i = 1; i<= n; i++){
      column = document.createElement("div");
      column.classList.add("column");
      for (let j = 1; j<= n; j++){
        row = document.createElement("div");
        row.classList.add("row");
        row.style.border = "1px solid #D1D9E0";
        column.appendChild(row);
      }
      sketchScreen.appendChild(column);
    }
  }
  createGrids(n);
  
  function randomColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    return "rgb(" + x + "," + y + "," + z + ")";
  }
  
  let bgColor = document.querySelectorAll(".row");
  function changeBg(n) {
    for (let i = 0; i < n*n; i++){
      bgColor[i].addEventListener("mouseover", () => {
        bgColor[i].style.background = randomColor();
      });
    }
  }
  changeBg(n);
}

