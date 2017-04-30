const COLORS = [
  'red',
  'blue',
  'orange',
  'yellow',
  'green',
  'purple',
  'brown',
  'gray',
  'black',
  'white',
  'aqua',
];

let currentColor = COLORS[0];

function main() {
  document.body.appendChild(makeCanvas(10));
  document.body.appendChild(makePalette());
  document.body.appendChild(makeCurrentColorIndicator());
}

function changeColor(event) {
  event.target.classList.remove(event.target.classList[1]);
  event.target.classList.add(currentColor);
}

function makeSquare() {
  const square = document.createElement('div');
  square.classList.add('square', 'white');
  square.addEventListener('click', changeColor);
  return square;
}

function makeRow(size) {
  const row = document.createElement('div');
  row.classList.add('row');
  for (let i = 0; i < size; ++i) {
    row.appendChild(makeSquare());
  }
  return row;
}

function makeCanvas(size) {
  const canvas = document.createElement('div');
  canvas.classList.add('canvas');
  for (let i = 0; i < size; ++i) {
    canvas.appendChild(makeRow(size));
  }
  return canvas;
}

function makePalette() {
  const palette = document.createElement('div');
  palette.classList.add('palette');
  COLORS.map(makeColorCircle).forEach(colorCircle => {
    palette.appendChild(colorCircle);
  });
  return palette;
}

function makeColorCircle(color) {
  const circle = document.createElement('div');
  circle.classList.add('color', color);
  circle.addEventListener('click', changeCurrentColor);
  return circle;
}

function changeCurrentColor(event) {
  const newCurrentColor = event.target.classList[1];
  const currentColorBox =
    document.body.getElementsByClassName('currentColor')[0];
  currentColorBox.classList.remove(currentColor);
  currentColorBox.classList.add(newCurrentColor);
  currentColor = newCurrentColor;
}

function makeCurrentColorIndicator() {
  const colorIndicator = document.createElement('div');
  const text = document.createElement('span');
  text.classList.add('text');
  text.appendChild(document.createTextNode('CURRENT COLOR =>'));

  const currentColorBox = document.createElement('div');
  currentColorBox.classList.add('currentColor', currentColor);
  colorIndicator.appendChild(text);
  colorIndicator.appendChild(currentColorBox);
  return colorIndicator;

}


window.onload = main;
