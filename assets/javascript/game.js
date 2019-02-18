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
//onclick images add number to current total 
// cry click += print to current number
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

$("#image1").on("click", function(){
    currentTotal =  cry1 + currentTotal;
    $("#currentTotal").text(currentTotal)
      if(myNum === currentTotal) {
      wins++;   
      $("#wins").text(wins);
      reset();
    }
      if(myNum < currentTotal){
      losses++;
      $("#losses").text(losses);
      reset();
    }  
  });


   $("#image2").on("click", function(){
     currentTotal = cry2 + currentTotal; 
    $("#currentTotal").text(currentTotal) 
      if(myNum === currentTotal) {
      wins++;   
      $("#wins").text(wins); 
      reset();
    }
      if(myNum < currentTotal){
      losses++;
      $("#losses").text(losses);
      reset();
    }
   });

   $("#image3").on("click", function(){
    currentTotal = cry3 + currentTotal;
    $("#currentTotal").text(currentTotal) 
      if(myNum === currentTotal) {
      wins++;   
      $("#wins").text(wins);
      reset();
    }
      if(myNum < currentTotal){
      losses++;
      $("#losses").text(losses);
      reset();
    }
   });
   
   $("#image4").on("click", function(){
    currentTotal = cry4 + currentTotal;
    $("#currentTotal").text(currentTotal)
      if(myNum === currentTotal) {
      wins++;   
      $("#wins").text(wins); 
      reset();
    }
      if(myNum < currentTotal){
      losses++;
      $("#losses").text(losses);
      reset();
    }
   });

   
});


