const brush = document.querySelector('.current-brush');
const paletteColors = Array.from(document.querySelectorAll('.palette-color'));
const squares = Array.from(document.querySelectorAll('.square'));


const getColor = (element) => element.classList.item(1);


const handleClickPaletteColor = (event) => brush.classList.replace(
  getColor(brush),
  getColor(event.target),
  );
  
paletteColors.forEach((paletteColor) => {
  paletteColor.onclick = handleClickPaletteColor
});


const isPartOfAUniqueLine = (column, i) => {
  const colors = squares.map((square) => getColor(square));
  const columnColors = new Set();
  const rowColors = new Set();

  switch (column) {
    case 0:
      columnColors.add(colors[0]).add(colors[3]).add(colors[6]);
      rowColors.add(colors[i]).add(colors[i + 1]).add(colors[i + 2]);
      break;
      
    case 1:
      columnColors.add(colors[1]).add(colors[4]).add(colors[7]);
      rowColors.add(colors[i - 1]).add(colors[i]).add(colors[i + 1]);
      break;
      
    case 2:
      columnColors.add(colors[2]).add(colors[5]).add(colors[8]);
      rowColors.add(colors[i - 2]).add(colors[i - 1]).add(colors[i]);
      break;
  }

  const isARow = rowColors.size === 3;
  const noEmptyInRow = !rowColors.has('color-5');
  
  const isAColumn = columnColors.size === 3;
  const noEmptyInColumn = !columnColors.has('color-5');

  return isARow && noEmptyInRow || isAColumn && noEmptyInColumn;
}


const handleClickSquare = (event) => {
  const square = event.target;
  square.classList.replace(getColor(square), getColor(brush));

  const i = squares.indexOf(square);
  const column = i % 3;

  if (isPartOfAUniqueLine(column, i)) {
    document.querySelector('.message')
      .innerText = 'Hey, you put three unique colors in a line. Cool!';
  }
}

squares.forEach((square) => square.onclick = handleClickSquare);