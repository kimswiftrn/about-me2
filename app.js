// use strict;

console.log('this js file is connected');

// string: some characters(letters, spaces, numbers) strung together
// quotes make a string
// variables let us save information by giving that information a name
// var variableName = 'value for that variable';
      
      
var nameOfTheUser = prompt('What is your name?');
var livesInSeattle = prompt('Do you live in Seattle?');
if (livesInSeattle.toLowerCase()==='yes'){
  //if yes do your patients have central iv lines?
  alert('okay got it');
  console.log('lives in seattle');

} else{
  alert('Bummer...');
  console.log(bummer);

}
var hasIV = prompt('Do your patients have central IV lines?');
if(hasIV.toLowerCase()==='yes'){
alert('We can help');
console.log(central)
}
 else{
  alert('Ok. Keep us in mind if you need us. ');
  console.log(nocentral)
}


   var nurseTrain = prompt('Do your nurses need yearly training?');
if(nurseTrain.toLowerCase()==='yes'){
 alert('We can help with that');
 console.log(needstrain);

 } else{
   alert('Ok. Keep us in mind if you need us.');
   console.log(notrain);
 }

  var saveMoney = prompt('Would yo like us to come out and show you how you can save money by training with us?');
if (saveMoney.toLowerCase()==='yes'){
  alert ('Patients are the first priority');
  console.log(savemoney);
  
  } else{
         alert('Ok. Keep us in mind if you need us. ');
         console.log(dontsavemoney);
  }
     var visitTomorrow= prompt('Should I come tomorrow?');
if(visitTomorrow.toLowerCase()==='yes')
     alert('See you tomorrow');
     console.log(visittom);
    
     else {
       alert('Ok. Keep us in mind if you need us. ');
       console.log(novisit);
       
    }
