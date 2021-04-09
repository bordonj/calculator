let sentence = prompt('Enter a sentence');
console.log('input sentence', sentence);

function capFirstLastLetter(sentence) {
  let trimmedSentence = sentence.trim();
  let firstLetter = trimmedSentence.slice(0, 1).toUpperCase();
  let lastLetter = trimmedSentence.slice(-1).toUpperCase();
  
  return `${firstLetter}${lastLetter}`
};

//THIS CODE WORKED WITH THE FIRST SENTENCE
// function capFirstLastLetter(sentence) {
//   let trimmedSentence = sentence.trim();
//   let firstLetter = trimmedSentence.slice(0, 1).toUpperCase();
//   let lastLetter = trimmedSentence.slice(-1).toUpperCase();
//   let midSentence = trimmedSentence.slice(1, -1);
  
//   return `${firstLetter}${midSentence}${lastLetter}.`
// };

//THIS CODE IS TO ACCOUNT FOR THE PERIOD
// let myLastLetter =
//   sentence[sentence.length - 1] === '.' ?
//   sentence.slice(-2, -1) :
//   sentence.slice(-1);

function capLastFirstLetter(sentence) {
  let trimmedSentence = sentence.trim();
  let firstLetter = trimmedSentence.slice(0, 1).toUpperCase();
  let lastLetter = trimmedSentence.slice(-1).toUpperCase();
  
  return `${lastLetter}${firstLetter}`;
};

// console.log(capFirstLastLetter(sentence));

function callLetters(){
  capFirstLastLetter(sentence);
  console.log('callLetters sentence var', sentence);
  console.log('ran callLetters Func capFirstLastLetter', capFirstLastLetter(sentence));
  capLastFirstLetter(sentence);
  console.log('ran callLetters Func capLastFirstLetter', capLastFirstLetter(sentence));
};

// console.log('callLetters Func', callLetters());
callLetters();
  
function concatSentence(){
  let reversedLetters = capLastFirstLetter(sentence);
  
  return `${sentence}${reversedLetters}`;
};

concatSentence();

function countLetters() {
  let numberLetters = sentence.length;
  let letterIndex = Math.floor(numberLetters / 2);
  let newLetter = sentence[letterIndex];
  let reversedLetters = capLastFirstLetter(sentence);

  return `${newLetter}${sentence}${reversedLetters}`;
}

countLetters();

function reverseSentence(countLetters) {
  let finalSentence = countLetters();
  let splitSentence = finalSentence.split('');
  let reverseArray = splitSentence.reverse();
  let joinArray = reverseArray.join('');

  return joinArray;
}

$(document).ready(function () {
  let finalSentence = reverseSentence(countLetters);
  let originalSentence = sentence;
  $("#target").text(finalSentence);
  $("#original").text(originalSentence);

  $("p#dog").click(function() {
    $("p#target").show();
  })

  $("p#cat").click(function() {
    $("p#target").toggle();
    $("p#original").toggle();
  })
});