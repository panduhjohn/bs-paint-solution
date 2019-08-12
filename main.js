const brush = document.querySelector('.current-brush');
// brush.classList.add('blue');


const getColor = (element) => element.classList.item(1);


const handleClickPaletteColor = (event) => brush.classList.replace(
  getColor(brush),
  getColor(event.target),
);


const paletteColors = Array.from(document.querySelectorAll('.palette-color'));
paletteColors.forEach((paletteColor) => paletteColor.onclick = handleClickPaletteColor);

const squares = Array.from(document.querySelectorAll('.square'));


const isPartOfAUniqueLine = (column, row) => {
  const colors = squares.map((square) => getColor(square));
  const columnColors = new Set();
  const rowColors = new Set();

  switch (column) {
    case 0:
      columnColors.add(colors[0]).add(colors[3]).add(colors[6]);
      break;
      
    case 1:
      columnColors.add(colors[1]).add(colors[4]).add(colors[7]);
      break;

    case 2:
      columnColors.add(colors[2]).add(colors[5]).add(colors[8]);
      break;
  }
    
    switch (row) {
      case 0:
        rowColors.add(colors[0]).add(colors[1]).add(colors[2]);
        break;
        
      case 1:
        rowColors.add(colors[3]).add(colors[4]).add(colors[5]);
        break;
  
      case 2:
        rowColors.add(colors[6]).add(colors[7]).add(colors[8]);
        break;
    }

    const isARow = rowColors.size === 3;
    const noWhiteInRow = !rowColors.has('white');
    
    const isAColumn = columnColors.size === 3;
    const noWhiteInColumn = !columnColors.has('white');

    return isARow && noWhiteInRow || isAColumn && noWhiteInColumn;
}


const handleClickSquare = (event) => {
  const square = event.target;
  square.classList.replace(getColor(square), getColor(brush));

  const index = squares.indexOf(square);
  const column = index % 3;
  const row = Math.floor(index / 3);

  if (isPartOfAUniqueLine(column, row)) {
    document.querySelector('.message')
      .innerText = 'Hey, you put three unique colors in a line. Cool!';
  }
}

squares.forEach((square) => square.onclick = handleClickSquare);