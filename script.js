const container = document.querySelector(".container");
const sketchScreen = document.querySelector(".sketch-screen");

function createGrids(n) {
  for (let i = 1; i<= n; i++){
    column = document.createElement("div");
    column.classList.add("column");
    for (let j = 1; j<= n; j++){
      row = document.createElement("div");
      row.classList.add("row");
      row.style.border = "1px solid white";
      column.appendChild(row);
    }
    sketchScreen.appendChild(column);
  }
}
createGrids(16);