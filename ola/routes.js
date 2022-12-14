var array = [
    ['Toronto','Islington Avenue at New Toronto St','Southbound','+647 123 7690'],
    ['Hamilton', '4 MacNab St S, Hamilton','Highway 408','+1 616 005 9011'],
    ['Barrie','Barrie, ON L2N 5U0','McKay Rd','+905 123 7690'],
    ['London','201 Bank St #537','Carriage Rd','+1 519 123 7690'], 
    ['Ottawa','Ottawa City Mall','Carriage Rd','+613 123 9220'],
    ['Windsor','400 Chatham St W','Tecumseh Mall','+519 123 9000'],
    ['Brampton','506 Main St S, Brampton','Sandalwood Park','+1 437 123 1230'],
    ['Kitchener','Kitchener, ON N2E 9P6','Kitchener City Hall','+1 519 503 4448'],
    ['Waterloo','University of Waterloo','Conestoga','+1 519 503 8879'],
    ['Scarborough','Toronto, ON M9S 0VA','Wicksteed Avenue','+416 411 2370'],
    ['Mississauga','Mississauga, ON L4T 2M7','Airport Road','+905 416 1870'],
];
table = document.getElementById("table");

for(var i = 1; i < table.rows.length; i++)
{

for(var j = 0; j < table.rows[i].cells.length; j++)
{
table.rows[i].cells[j].innerHTML = array[i - 1][j];
}
}


