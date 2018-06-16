// Part A
function howdy() {
  console.log( "Hanna Preston says hi!" );
}

howdy();


// Part B
var numba = function ( string ) {

    if (string.length < 7 ){
        console.log( "What a short little word!" );
    }

    else if (string.length > 7 ){
        console.log( "I'm sorry, but that’s too many to count." );
    }

    else {
        console.log( "7, what a perfect choice!" );
    }

};

numba("7");

numba("seventy");

numba("university");


// Part C
function inception(display, favMovie) {
  display(favMovie);
}

function display() {
  console.log("The Money Pit is a fantastic movie.");
}

inception(display);
