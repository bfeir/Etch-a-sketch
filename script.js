const container = document.querySelector('.container');

for(i=0; i<16; i++) {
        const row = document.createElement('div');
        row.id = "row" + i;
        row.className = "row";
        container.appendChild(row);

        const rowNumber = document.getElementById("row" + i);

    for(j=0; j<16; j++) {
        
        const gridCell = document.createElement('div');
        gridCell.classList.add('gridCell');
        rowNumber.appendChild(gridCell);
    }

}
