var haiku = require('./haiku');
// console.log(haiku.createHaiku ("[5, 7, 5]") );

// createHaiku([5, 7, 5]);
//create haiku from wordArr that have 5 & 7 syllables:

var randomNum = Math.floor((Math.random() * 100) + 1);

function createHaiku(structure){
	// console.log(structure);
	// console.log("this should log a haiku with the structure " + structure);
	
	for ( var key in structure ){
		console.log(structure[key]);
	}
	// console.log(structure[0], structure[1], structure[2]);
	// console.log(haiku.wordArr[5][randomNum]);
	var line1 = haiku.wordArr[structure[0]][randomNum];
	console.log(line1.replace(/[^\w\s]/gi, ''));
	var line2 = haiku.wordArr[structure[1]][randomNum];
	console.log(line2.replace(/[^\w\s]/gi, ''));
	var line3 = haiku.wordArr[structure[2]][randomNum * randomNum];
	console.log(line3.replace(/[^\w\s]/gi, ''));
}

module.exports = {
  createHaiku: createHaiku,
};

createHaiku( [5, 7, 5] ) ;

//more complex haiku structures
// [
//   [2,3],
//   [1,3,3],
//   [3,2]
// ]