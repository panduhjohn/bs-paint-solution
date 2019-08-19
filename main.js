const getColor = (element) => element.classList[1];

const handleClickSquare = (event) => {
  const square = event.target;
  const brush = document.querySelector('.current-brush');
  square.classList.replace(getColor(square), getColor(brush));
}

document.querySelectorAll('.square').forEach((square) => {
  square.onclick = handleClickSquare
});

const addSquareToCanvas = () => {
  const square = document.createElement('div');
  square.classList.add('square');
  square.classList.add('color-5');
  square.onclick = handleClickSquare;
  
  const canvas = document.querySelector('.canvas');
  canvas.appendChild(square);
}

const setSize = () => {
  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => square.remove());
  
  const size = Number(document.querySelector('.size-input').value) || 30;
  const squaresNeeded = size * size;
  
  const canvas = document.querySelector('.canvas');
  canvas.style.gridTemplateRows = `repeat(${size}, ${1500 / size}px)`;
  canvas.style.gridTemplateColumns = `repeat(${size}, ${1500 / size}px)`;
  
  for (let squareNumber = 1; squareNumber <= squaresNeeded; squareNumber++) {
    addSquareToCanvas();
  }
}
  
document.querySelector('.size-button').onclick = setSize;
setSize();
  

const handleClickPaletteColor = (event) => {
  const brush = document.querySelector('.current-brush');
  brush.classList.replace(getColor(brush), getColor(event.target));
}
  
const paletteColors = document.querySelectorAll('.palette-color');
paletteColors.forEach((paletteColor) => {
  paletteColor.onclick = handleClickPaletteColor
});
