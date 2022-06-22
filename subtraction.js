var level = 1;
var num1;
var num2;
var started=false;
var correctAnswer;

$(document).keydown(function () {
    if(!started){
   
      $(".gamesheading").text(" ");
      nextQuestion();
      started = true;
    }
    
  
  });

function nextQuestion(){   
    
if(level<=3){
    num1=Math.floor(Math.random()*100);
    num2=Math.floor(Math.random()*100);
}
else if(3<level<=5){
    num1=Math.floor(Math.random()*1000)+100;
    num2=Math.floor(Math.random()*1000)+100;
}
else if(5<level<=8){
    num1=Math.floor(Math.random()*10000)+1000;
    num2=Math.floor(Math.random()*10000)+1000;
}
else if(8<level<=10){
    num1=Math.floor(Math.random()*100000)+10000;
    num2=Math.floor(Math.random()*100000)+10000;
}

if(num1>=num2){
document.getElementById('number1').innerHTML = "   "+num1;
document.getElementById('number2').innerHTML = "- "+num2;
correctAnswer = num1-num2;
}
else{
document.getElementById('number1').innerHTML = "   "+num2;
document.getElementById('number2').innerHTML = "- "+num1;
correctAnswer = num2-num1;
}

console.log(correctAnswer);
}
 

function checkAnswer(){

    var userAnswer=document.getElementById('answer').value;
    if(userAnswer==correctAnswer){
        level++;
        $(".gamesheading").text("Correct Answer!!");
        $(".gamesheading").css("color","#3EC70B");
        document.getElementById('answer').value=" ";
        nextQuestion();
            }
    else 
    {
        $(".gamesheading").text("Wrong Answer , press any key to start again!");
        $(".gamesheading").css("color","red");
      setTimeout(function () {
        started=false;
        level=1;
        document.getElementById('answer').value=" ";
        
      }, 1000);
    }
}