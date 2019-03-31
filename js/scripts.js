function quiz(){

  var score = 0;
  var newScore = 0;
  var firstQuestion = document.forms["myForm"]["firstQuestion"].value;
  var secondQuestion = document.forms["myForm"]["secondQuestion"].value;
  var thirdQuestion = document.forms["myForm"]["thirdQuestion"].value;
  var fourthQuestion = document.forms["myForm"]["fourthQuestion"].value;
  var fifthQuestion = document.forms["myForm"]["fifthQuestion"].value;

  for(i=0; i<=5; i++){
    if(firstQuestion == "4"){
      newScore = score+1;
    }
    if(secondQuestion == "4"){
      newScore=newScore+1;
    }
    if(thirdQuestion == "4") {
      newScore=newScore+1;
    }
    if (fourthQuestion == "4"){
      newScore=newScore+1;
    }
    if (fifthQuestion == "1"){
      newScore=newScore+1;
    }

  }

    var percentageScore = (newScore/5) * 100;

  document.getElementById("message").innerHTML="You scored " + percentageScore + "%";
  document.getElementById("result").style.visibility = "visible";
  e.preventDefault();
}
$(document).ready(function(){
  $(".btn1").click(function(){
    $(".para").slideUp()
  });
  $(".btn2").click(function(){
    $(".para").slideDown();
  });
});