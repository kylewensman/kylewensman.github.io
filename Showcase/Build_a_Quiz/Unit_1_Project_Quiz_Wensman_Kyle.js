var $ = function( id ) { return document.getElementById( id ); }
var questions; //Saves array of questions
var score = 0;
var i = 3;

var begin = function(){
  $("begin").value = "Submit"; //change name of button
  $("begin").setAttribute("id", "submit"); //change id of button
  questions[1].setAttribute("class", "hide"); // hides previous section text
  questions[3].removeAttribute("class"); // shows next section text
  $("submit").onclick = validate;
}

var next = function(){
  questions[i].setAttribute("class", "hide"); // hides previous section text
  i = i + 2;                                      //My way of counting Nodes - Section Nodes
  questions[i].removeAttribute("class"); // shows next section text
  if(i == 23){
    questions[23].innerHTML += "<br>" + "Your score is " + score + " out of 100 points possible";
    $("next").value = "Play Again"; //change name of button
    $("next").setAttribute("id", "playAgain"); //change id of button
    $("playAgain").onclick = playAgain;
  }else{
    $("next").value = "Submit"; //change name of button
    $("next").setAttribute("id", "submit"); //change id of button
    $("submit").onclick = validate;
  }
}

var validate = function(){
  var Q1 = $("Q1").value.toLowerCase();// this gets the users input and makes it lowerCase to prevent the app from being case sensitive
  var Q2 = $("Q2").value.toLowerCase();
  var Q3;
  var Q4 = $("Q4").value.toLowerCase();
  var Q5event1 = $("Q5event1").value;
  var Q5event2 = $("Q5event2").value;
  var Q6 = $("Q6").value.toLowerCase();
  var Q7 = $("Q7").value;
  var Q8 = $("Q8").value.toLowerCase();
  var Q9 = $("Q9").value.toLowerCase();
  var Q10 = $("Q10").value.toLowerCase();
  //                                                           Question 1
  if(i == 3 && Q1 == 'toys"r"us' || Q1 == 'toys "r" us' || Q1 == "toys r us"){
    questions[3].innerHTML += '<span style = "color: green"> Correct the answer is Toys"R"Us</span>'; // I do realize I could put i instead of the number
    score = score + 10;
  }else if(i == 3){
    questions[3].innerHTML += '<span style = "color: red"> Wrong the answer is Toys"R"Us</span>';
  //                                                              Question 2
  }else if(i == 5 && Q2 == "mark zuckerberg" || Q2 == "mark" ||Q2 == "zuckerberg"){
      questions[5].innerHTML += "<span style = 'color: green'> Correct the answer is Mark Zuckerberg</span>";
      score = score + 10;
  }else if (i == 5){
      questions[5].innerHTML += "<span style = 'color: red'> Wrong the answer is Mark Zuckerberg</span>";
  //                                                                Question 3
    }else if(i == 7 && $("eagles").checked){
      Q3 = "Philadelphia Eagles";
      questions[7].innerHTML += "<br><br>" + "<span style = 'color: green'> Correct the answer is Philadelphia Eagles</span>";
      score = score + 10;
  }else if (i == 7){
      questions[7].innerHTML += "<br><br>" + "<span style = 'color: red'> Wrong the answer is Philadelphia Eagles</span>";
  //                                                                Question 4
  }else if(i == 9 && Q4 == "rex tillerson" || Q4 == "rex" || Q4 == "tillerson"){
    questions[9].innerHTML += "<span style = 'color: green'> Correct the answer is Rex Tillerson</span>";
    score = score + 10;
  }else if (i == 9){
    questions[9].innerHTML += "<span style = 'color: red'> Wrong the answer is Rex Tillerson</span>";
  //                                                                 Question 5
  }else if(i == 11 && Q5event1 == 1 && Q5event2 == 2){
    questions[11].innerHTML += "<br><br>" + "<span style = 'color: green'> Correct, Golden State Killer happened Apr 24 and Kilauea volcano happened May 3</span>";
    score = score + 10;
  }else if (i == 11){
    questions[11].innerHTML += "<br><br>" + "<span style = 'color: red'> Wrong, Golden State Killer happened Apr 24 and Kilauea volcano happened May 3</span>";
  //                                                                  Question 6
  }else if(i == 13 && Q6 == "colin kaepernick" || Q6 == "colin" || Q6 == "kaepernick"){
    questions[13].innerHTML += "<span style = 'color: green'> Correct the answer is Colin Kaepernick</span>";
    score = score + 10;
  }else if (i == 13){
    questions[13].innerHTML += "<span style = 'color: red'> Wrong the answer is Colin Kaepernick</span>";
  //                                                                    Question 7
  }else if(i == 15 && Q7 == "valueFalse"){
    questions[15].innerHTML += "<br><br>" + '<span style = "color: green"> Correct, it was "The Emoji Movie," although "Fifty Shades Darker" followed behind</span>';
    score = score + 10;
  }else if (i == 15){
    questions[15].innerHTML += "<br><br>" + '<span style = "color: red"> Wrong, it was "The Emoji Movie," although "Fifty Shades Darker" followed behind</span>';
  //                                                                    Question 8
  }else if(i == 17 && Q8 == "apple"){
    questions[17].innerHTML += "<span style = 'color: green'> Correct the answer is Apple</span>";
    score = score + 10;
  }else if (i == 17){
    questions[17].innerHTML += "<span style = 'color: red'> Wrong the answer is Apple</span>";
  //                                                                    Question 9
  }else if(i == 19 && Q9 == "moons" || Q9 == "moon"){
    questions[19].innerHTML += "<br>" + "<span style = 'color: green'> Correct the answer is moons. Jupiter now has a total to 79</span>";
    score = score + 10;
  }else if (i == 19){
    questions[19].innerHTML += "<br>" + "<span style = 'color: red'> Wrong the answer is moons</span>";
  //                                                                      Question 10
  }else if(i == 21 && Q10 == "ruby red" || Q10 == "ruby" || Q10 == "red"){
    questions[21].innerHTML += "<br>" + "<span style = 'color: green'> Correct the answer is ruby red</span>";
    score = score + 10;
  }else if (i == 21){
    questions[21].innerHTML += "<br>" + "<span style = 'color: red'> Wrong the answer is ruby red</span>";
  }
    $("submit").value = "Next"; //change name of button
    $("submit").setAttribute("id", "next"); // change id of button
    $("next").onclick = next;
}

var playAgain = function(){
  location.reload(true) //https://www.w3schools.com/jsref/met_loc_reload.asp
}


window.onload = function() {
    $("begin").onclick = begin;
    questions = $("mainDiv").childNodes; //Gets array of questions - JavaScript 2nd Edition Page 143 - Examples https://www.w3schools.com/jsref/prop_node_childnodes.asp
  }