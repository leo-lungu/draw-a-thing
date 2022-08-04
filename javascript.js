let numberSquares = 256;
let number = 16;
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
        markers[i].addEventListener('click', function change() { markers[i].style.backgroundColor= "red"}, false);
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



