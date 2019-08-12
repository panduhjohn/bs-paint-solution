const brush = document.querySelector('.current-brush');
brush.classList.add('blue');

const handleClickPaletteColor = (event) => brush.classList.replace(
  brush.classList.item(1),
  event.target.classList.item(1),
);

const paletteColors = Array.from(document.querySelectorAll('.palette-color'));
paletteColors.forEach((paletteColor) => paletteColor.onclick = handleClickPaletteColor);

const squares = Array.from(document.querySelectorAll('.square'));

const isPartOfAUniqueLine = (column, row) => {
  const colors = squares.map((square) => square.classList.item(1));
  const columnColors = [];
  const rowColors = [];

  switch (column) {
    case 0:
      columnColors.push(colors[0], colors[3], colors[6],);
      break;
      
    case 1:
      columnColors.push(colors[1], colors[4], colors[7],);
      break;

    case 2:
      columnColors.push(colors[2], colors[5], colors[8],);
      break;
  }
    
    switch (row) {
      case 0:
        rowColors.push(colors[0], colors[1], colors[2],);
        break;
        
      case 1:
        rowColors.push(colors[3], colors[4], colors[5],);
        break;
  
      case 2:
        rowColors.push(colors[6], colors[7], colors[8],);
        break;
    }

    const isARow = (new Set(rowColors).size) === 3;
    const noWhiteInRow = !(rowColors.includes('white'));
    
    const isAColumn = (new Set(columnColors)).size === 3;
    const noWhiteInColumn = !(columnColors.includes('white'));

    return isARow && noWhiteInRow || isAColumn && noWhiteInColumn;
}

const handleClickSquare = (event) => {
  const square = event.target;
  square.classList.replace(
    square.classList.item(1),
    brush.classList.item(1),
  );

  const index = squares.indexOf(square);
  const column = index % 3;
  const row = Math.floor(index / 3);

  if (isPartOfAUniqueLine(column, row)) {
    document.querySelector('.message').innerText = 'You put three unique colors in a line!';
  }
}

squares.forEach((square) => square.onclick = handleClickSquare);