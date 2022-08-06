let table;
let canvasSize = 520;

function setup() {
  createCanvas(canvasSize, canvasSize);
  loadData();
  noLoop();
  drawBarGraph();
  drawRadarGraph();
}

function keyTyped() {
  background(255);
  if (key === "b") {
    drawBarGraph();
  } else if (key === "r") {
    drawRadarGraph();
  }
  // uncomment to prevent any default behavior
  return false;
}

function drawRadarGraph() {
  push();
  stroke(0);
  fill(0);
  translate(canvasSize / 2, canvasSize / 2);
  table.rows.forEach(drawRadar);
  pop();
}

function drawRadar(row, i) {
  let anlgeStep = 360 / table.rows.length;
  let temperature = row.get(1);
  let temperatureAsColor = map(temperature, 0, 100, 0, 255);
  stroke(temperatureAsColor);
  rotate(anlgeStep);
  strokeWeight(2);
  let temperatureAsLength = map(temperature, 0, 100, 0, canvasSize / 2);
  line(0, 0, temperatureAsLength, 0);
  noStroke();
  text(floor(temperature), temperatureAsLength + 10, 0);
}

function drawBarGraph() {
  noStroke();
  table.rows.forEach(drawBar);
}

function drawBar(row, i) {
  let barWidth = canvasSize / table.rows.length;
  let temperature = row.get(1);
  let mappedTemperature = map(temperature, 0, 100, 0, 255);
  fill(mappedTemperature);
  rect(
    i * barWidth,
    canvasSize - mappedTemperature,
    barWidth,
    mappedTemperature
  );
}

function loadData() {
  // load data from a file
  // table = loadTable('data.csv', 'csv');

  // or make some fake data
  table = new p5.Table();
  table.addColumn("week");
  table.addColumn("temperature");
  table.addColumn("rainfall");

  for (let i = 0; i < 52; i++) {
    let row = table.addRow();
    row.setNum("week", i);
    row.setNum("temperature", noise(i * 0.1) * 100);
    row.setNum("rainfall", noise(i * 0.1) * 100);
  }
}
