let numberSquares = 256;
let number = 16;
let colourSelect = "black";
let colourRainbow = "#";
let letters = "0123456789ABCDEF"
const container = document.querySelector('#grids');
setSquares();

function newSquares(val) {
    document.getElementById('textInput').value = val; 
    number = val;
    numberSquares = number * number;
    changeSquares();
}

function setSquares() {
    var markers = [];
    for (let i = 1; i <= numberSquares; i++) {
        markers[i] = document.createElement('div');
        markers[i].id = 'grid';
        container.appendChild(markers[i]);
        markers[i].addEventListener('mousedown', function change() { markers[i].style.backgroundColor = colourSelect; 
        if(colourRainbow === "rainbow") {
            rainbowMode();
        markers[i].addEventListener('mouseenter', function change() { 
            markers[i].style.backgroundColor = colourSelect; 
            if(colourRainbow === "rainbow") {
                rainbowMode();
                console.log("test");
        }}, false);
        markers[i].style.cssText = `
        height: ` + 480/number + `px;
        width:` + 480/number + `px;`;
    }
    const grids = document.getElementById('grids');  
    grids.style.cssText = `
    grid-template-columns: repeat(` + number + `, 1fr);
    grid-template-rows: repeat(` + number + `, 1fr);`;
}


function changeSquares() {
    document.getElementById("grids").innerHTML = "";
    setSquares();
}

function colourSelected() {
    colourSelect = document.getElementById('colorpicker').value;
    console.log(colourSelect);
}

function clearSketch() {
    changeSquares();
}

function rainbowMode() {
    colourSelect = "#"
    for (let i = 0; i < 6; i++) {
        colourSelect += letters[Math.floor(Math.random() * 16)]
    }
}

