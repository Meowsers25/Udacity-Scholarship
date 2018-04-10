// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
let row = document.getElementById('inputHeight');
let col = document.getElementById('inputWeight');

document.querySelector('form#sizePicker').addEventListener('submit', function(e){
  e.preventDefault();
  console.log(row.value);
});

document.querySelector('form#sizePicker').addEventListener('submit', function(e){
  e.preventDefault();
  console.log(col.value);
});


function makeGrid() {

// Your code goes here!

}
