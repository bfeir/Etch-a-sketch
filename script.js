const container = document.querySelector('.container');

function createGrid(userNumber) {
for(i=0; i<userNumber; i++) {
        const row = document.createElement('div');
        row.id = "row" + i;
        row.className = "row";
        container.appendChild(row);

        const rowNumber = document.getElementById("row" + i);

    for(j=0; j<userNumber; j++) {
        
        const gridCell = document.createElement('div');
        gridCell.classList.add('gridCell');
        rowNumber.appendChild(gridCell);
        }

    }
    const cellSelection = document.querySelectorAll('.gridCell');
    cellSelection.forEach( function(element) {
    element.addEventListener('mouseenter', () => {
    element.style.backgroundColor = 'black';
    });
});
}

function chooseGridSize() {
    document.querySelectorAll('.row').forEach(e => e.remove());
    
    let userNumber = Number(window.prompt("Type a number", ""));
    if (userNumber >= 100) userNumber = 100;
    createGrid(userNumber);
    }

createGrid(16);