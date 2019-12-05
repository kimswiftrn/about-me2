// use strict;

console.log('this js file is connected');

// string: some characters(letters, spaces, numbers) strung together
// quotes make a string
// variables let us save information by giving that information a name
// var variableName = 'value for that variable';



//var westSeattle = prompt('Do your patients have central IV lines?');
//if(hasIV.toLowerCase()==='yes'){
//alert('We can help');
//console.log(central)
//}
//else{
//alert('Ok. Keep us in mind if you need us. ');
//console.log(nocentral)
//}


var livesInSeattle = prompt('Has Kim lived in Seattle more than 25 years?');
if(livesInSeattle.toLowerCase()==='yes'){
  alert('You got that right!');
  console.log('Kim Lives in Seattle');

} else{
  alert('Wrong!');
  console.log('kim lives in seattle');
}

var kimSchool = prompt('where does Kim go to school?');
if (kimSchool==='codefellows'){
  alert('correct!!!');
  console.log ('codefellows');
}
var kimIsFrom = prompt ('where is kim from ?')
if (kimIsFrom === 'Northern California'){
alert('correct!!!');
console.log ('where is kim from ')
var kimDog = prompt('Does Kim have a dog?');
if (kimDog.toLowerCase()==='yes'){
  alert ('Correct!!');
  console.log('kim has a dog');
}
} else{
  alert('Ok. incorrect. Try again.');
  console.log('has dog');
}
var kimHood= prompt('Does Kim live in West Seattle?');
if(kimHood.toLowerCase() ==='yes') {
  alert('Yep! A great place.');
  console.log('lives in west seattle');
} else {
  alert('Incorrect. I can see you dont care.');
  console.log('doesnt care');
}

var secretNumber= 8;
var guessNumber=prompt ('guessNumber');
for (var i = 0; i < 4; i++) {
  if (guessNumber === secretNumber){
    alert('Correct Answer! Good Job!');
    i = 4;
    // this is where you add to your score
  } else if (guessNumber < secretNumber) {
  guessNumber = prompt('Wrong answer. Too low');
  }
 else {
  guessNumber = prompt('wrong answer. Too high');
 }
} 
  // var howManyCars=prompt('Guess how many cars kim has.....');
  // if(howManyCars==='2')
  // alert('Yes! Great Answer. You are correct!');
  // console.log ('user guessed the right number');
  // if(howManyCars ==='0')
  // alert ('incorrect answer. Please try again');
  // console.log ('user guessed the wrong answer');
  // if(howManyCars ==='1')
  // alert ('incorrect answer. Please try again');
  // console.log ('user guessed the wrong answer');
  // if(howManyCars >'2')
  // alert ('incorrect answer. Please try again');
  // console.log ('user guessed the wrong answer');

  // var howManyCars0= prompt('guess how many cars I own....')
  // // If (howManyCars < '2');
  // //   alert('wrong');
  // //   console.log('wronganswer')
  // //    }   If(howManyCars1=2);
  // //     alert('correct');
  // //     // console.log('correct answer')
    
