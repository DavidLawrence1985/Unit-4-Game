$(document).ready(function(){
//generate random numbers
function randomNumber(min,max) {
  return  Math.floor(Math.random()*(max-min+1)+min);
};

// vars
var wins = 0;
var losses = 0;
var number = randomNumber(19,120);
var currentTotal = 0;
var cry1 = randomNumber(1,12);
var cry2 = randomNumber(1,12);
var cry3 = randomNumber(1,12);
var cry4 = randomNumber(1,12);
var myNum = number;

// show number 
$("#randomNumber").text(number);
$("#currentTotal").text(currentTotal);
$("#wins").text(wins);
$("#losses").text(losses);


//reset random number crystal numbers and and clear current total
function reset(){
  number = randomNumber(19,120);
  myNum = number;
  $("#randomNumber").text(number);
  currentTotal = 0;
  $("#currentTotal").text(currentTotal);
  cry1 = randomNumber(1,12);
  cry2 = randomNumber(1,12);
  cry3 = randomNumber(1,12);
  cry4 = randomNumber(1,12);
}
//sound functions
function soundOne() {
  var audio = new Audio('./assets/sounds/chime1.mp3');
  audio.loop = false;
  audio.play(); 
}
function soundTwo() {
  var audio = new Audio('./assets/sounds/chime2.mp3');
  audio.loop = false;
  audio.play(); 
}
function winSound() {
  var audio = new Audio('./assets/sounds/win.mp3');
  audio.loop = false;
  audio.play(); 
}
function lossSound() {
  var audio = new Audio('./assets/sounds/loss.mp3');
  audio.loop = false;
  audio.play(); 
}
//add crystals and check score
$("#image1").on("click", function(){
    soundOne();
    currentTotal =  cry1 + currentTotal;
    $("#currentTotal").text(currentTotal);
    if(myNum === currentTotal) {
      wins++;   
      $("#wins").text(wins);
      winSOund();
      setTimeout(reset, 250);
    }
    if(myNum < currentTotal){
      losses++;
      $("#losses").text(losses);
      lossSound();
      setTimeout(reset, 250);
    }  
  });

$("#image2").on("click", function(){
    soundTwo();
    currentTotal = cry2 + currentTotal; 
    $("#currentTotal").text(currentTotal);
    
    if(myNum === currentTotal) {
      wins++;   
      $("#wins").text(wins);
      winSound();
      setTimeout(reset, 250);
    }
    if(myNum < currentTotal){
      losses++;
      $("#losses").text(losses);
      lossSound();
      setTimeout(reset, 250);
    }
   });

  $("#image3").on("click", function(){
    soundOne();
    currentTotal = cry3 + currentTotal;
    $("#currentTotal").text(currentTotal); 
    if(myNum === currentTotal) {
      wins++;   
      $("#wins").text(wins);
      winSound();
      setTimeout(reset, 250);
    }
    if(myNum < currentTotal){
      losses++;
      $("#losses").text(losses);
      lossSound();
      setTimeout(reset, 250);
    }
   });
   
  $("#image4").on("click", function(){
    soundTwo();
    currentTotal = cry4 + currentTotal;
    $("#currentTotal").text(currentTotal);
    if(myNum === currentTotal) {
      wins++;   
      $("#wins").text(wins);
      winSound(); 
      setTimeout(reset, 250);
    }
    if(myNum < currentTotal){
      losses++;
      $("#losses").text(losses);
      lossSound();
      setTimeout(reset, 250);
    }
   });

});


