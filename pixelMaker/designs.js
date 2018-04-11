// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
let row = document.getElementById('inputHeight');
let col = document.getElementById('inputWeight');

document.querySelector('form#sizePicker').addEventListener('submit', function(e){
  e.preventDefault();
  console.log(row.value);
  console.log(col.value);
  makeGrid(row, col);
});

// document.querySelector('form#sizePicker').addEventListener('submit', function(e){
//   e.preventDefault();
//   console.log(col.value);
// });


function makeGrid(x, y) {
	$('tr').remove();

const rows = document.querySelectorAll('tr');
const cols = document.querySelectorAll('td');

rows.forEach(function(row){
  row.appendChild(rows);
})
}
