var fs = require("fs");
var cmudictFile = readCmudictFile('./cmudict.txt');

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}

//oraganizing the words by syllables count 1-7
//make an array of words that match syllables to pick from when generate
var wordArr = [ 0, [], [], [], [], [], [], [] ];

function formatData(data){    
   var lines = data.toString().split("\n"),
       lineSplit;

   lines.forEach(function(line){    
    lineSplit = line.split("  "); 
    var word = lineSplit[0];
    var phoneme = lineSplit[1]; 
    // console.log(lineSplit[0] + " " + lineSplit[1]); 
	    if ( phoneme ){
	    	var syllables = (phoneme.match(/\d+/g) || []).length;
	    // console.log(syllables, phoneme);
	    	if ( wordArr ){
			    for ( var i = 1; i < wordArr.length; i++ ){
			    	if ( syllables === i ){
			    		// console.log(wordArr[i]);
			    		wordArr[i].push(word);
			    		// console.log(wordArr[5]);
			    	}
			    }
		    }
		}
  });   
 
}

formatData(cmudictFile);

module.exports = {
	wordArr : wordArr
};
