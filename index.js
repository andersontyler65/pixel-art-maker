document.addEventListener("DOMContentLoaded", function addDiv() {
  setGrid();
  setPalet();
})

const colors = ["red","green","blue","yellow","purple","brown","orange"]
let currentColor = " ";
let mouseHold = false;

function setGrid () {
  let container = document.getElementById("container")
  for(let i = 0; i < 2640; i++) {
    let cube = document.createElement("div");
    cube.style.height = "10px"
    cube.style.width = "10px"
    cube.style.border = "1px solid black"
    cube.style.cssFloat = "left"
    cube.style.display = "inline-block"
    cube.addEventListener("click", handleCubeColor)
    cube.addEventListener("mouseenter", handleCubePaint)
    container.appendChild(cube);
  }
}

function handleCubeColor () {
  this.style.backgroundColor = currentColor
}

function setPalet () {
  let divPalet = document.getElementById("palet");
  for (let j = 0; j < colors.length; j++) {
    const select =  document.createElement("div")
    select.style.backgroundColor= colors[j]
    select.style.margin = "26px"
    select.style.height = "50px"
    select.style.width= "50px"
    select.style.display= "inline-block"
    select.style.border = "5px solid black"
    select.style.borderRadius="30%"
    select.addEventListener("click", colorSelect)
    divPalet.appendChild(select)
  }
}

function colorSelect (){
  const h1 = document.getElementById("headerh1")
  currentColor = this.style.backgroundColor;
  h1.style.backgroundColor = currentColor
}

function handleCubePaint() {
  const container = document.getElementById("container")
  container.addEventListener("mousedown",function () {
    mouseHold = true;
  })
  container.addEventListener("mouseup" ,function () {
    mouseHold = false;
  })
  if(mouseHold === true) {
    this.style.backgroundColor = currentColor;
  }
}
