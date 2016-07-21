var haiku = require('./haiku');
// console.log(haiku.createHaiku ("[5, 7, 5]") );

// createHaiku([5, 7, 5]);
//create haiku from wordArr that have 5 & 7 syllables:

var randomNum = Math.floor((Math.random() * 100) + 1);
	// console.log(structure);
	// console.log("this should log a haiku with the structure " + structure);
function createHaiku(structure, syllabelsArr){
    var arrOfWords;
    return structure.map(function(lines){
      return lines.map(function(syls){
        arrOfWords = syllabelsArr[syls];
        return arrOfWords[Math.floor(Math.random() * arrOfWords.length)];
      }).join(' ');
    }).join('\n');
}

//for future when have more time, generate a random way for the structure to createHaiku!
function haikuStruct(){
	var structArr = [ [], [], [] ];
	//pick random nums of syllables to push into each structArr arr, 
	//structArr[0] & structArr[2] can have combos of [5], [2,3], [3,2], [1,1,3], [3,1,1], [1,3,1], [1,2,2], [2,2,1], [2,1,2], [4,1], [1,4]
	//structArr[1] can have all combos of sylls to make 7!
}

module.exports = {
  createHaiku: createHaiku,
  haikuStruct: haikuStruct
};
