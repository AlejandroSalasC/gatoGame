var turn = 1; //1 = Azul y 2 = Rojo
var buttonSelect=["10","11","12","13","14","15","16","17","18","19"];
var count = 0;
changeTurnLabel();

function buttonPress(){

  changeColor();
  buttonSelect[event.srcElement.id]=turn;
  changeTurn();
  changeTurnLabel();
  verifyRows();
  verifyCross();
  verifyColums();
  if(count=9){
    deadEndChecker();
  }
  disableButton();

  //alert(buttonSelect[event.srcElement.id]);

}
function verifyRows(){

  if(buttonSelect[1]==buttonSelect[2] && buttonSelect[2]==buttonSelect[3])
  {
    revealRefreshButton();
    sayHowWins();
    disableAllButtons();
  }
  if(buttonSelect[4]==buttonSelect[5] && buttonSelect[5]==buttonSelect[6])
  {
    revealRefreshButton();
    sayHowWins();
    disableAllButtons();
  }
  if(buttonSelect[7]==buttonSelect[8] && buttonSelect[8]==buttonSelect[9])
  {
    revealRefreshButton();
    sayHowWins();
    disableAllButtons();
  }
}

function verifyColums(){

  if(buttonSelect[1]==buttonSelect[4] && buttonSelect[4]==buttonSelect[7])
  {
    revealRefreshButton();
    sayHowWins();
    disableAllButtons();
  }
  if(buttonSelect[2]==buttonSelect[5] && buttonSelect[5]==buttonSelect[8])
  {
    revealRefreshButton();
    sayHowWins();
    disableAllButtons();
  }
  if(buttonSelect[3]==buttonSelect[6] && buttonSelect[6]==buttonSelect[9])
  {
    revealRefreshButton();
    sayHowWins();
    disableAllButtons();
  }
}

function verifyCross(){

  if(buttonSelect[1]==buttonSelect[5] && buttonSelect[5]==buttonSelect[9])
  {
    revealRefreshButton();
    sayHowWins();
    disableAllButtons();
  }
  if(buttonSelect[7]==buttonSelect[5] && buttonSelect[5]==buttonSelect[3])
  {
    revealRefreshButton();
    sayHowWins();
    disableAllButtons();
  }

}

function sayHowWins(){
  if(turn==1){
    alert("Gana el rojo");
    document.getElementById("turnLabel").style.background = "#e65e57";
    document.getElementById("turnLabel").innerHTML = "Gana el rojo.";
  }
  else{

    alert("Gana el azul");
    document.getElementById("turnLabel").style.background = "#008CBA";
    document.getElementById("turnLabel").innerHTML = "Gana el azul.";
  }
}
function changeTurn() {

  if (turn=="1") {
    turn=2;
    count++;
  }
  else{
    turn=1;
    count++;
  }
}
function changeTurnLabel(){
  if(turn=="1"){
    document.getElementById("turnLabel").innerHTML = "Turno del azul";
  }
  else{
    document.getElementById("turnLabel").innerHTML = "Turno del rojo";
  }
}

function changeColor(){

  if(turn=="1"){
    document.getElementById(event.srcElement.id).style.background = "#008CBA";
    document.getElementById("turnLabel").style.background = "#e65e57";
  }
  else{
    document.getElementById(event.srcElement.id).style.background = "#e65e57";
    document.getElementById("turnLabel").style.background = "#008CBA";
  }
}

function disableButton(){
  document.getElementById(event.srcElement.id).disabled = true;
}

function revealRefreshButton(){

  document.getElementById("refreshLabel").style.display = "block";

}

function deadEndChecker(){

  var deadGame;
  var contador = 0;
  for(var i = 0; i <10; i++){
    if(buttonSelect[i]<9){
      contador++;

    }
  }

  if(contador>=9){
    document.getElementById("refreshLabel").style.display = "block";
    document.getElementById("turnLabel").style.background = "#bc71eb";
    document.getElementById("turnLabel").innerHTML = "Empate";
  }
}

function disableAllButtons(){

  document.getElementById("1").disabled = true;
  document.getElementById("2").disabled = true;
  document.getElementById("3").disabled = true;
  document.getElementById("4").disabled = true;
  document.getElementById("5").disabled = true;
  document.getElementById("6").disabled = true;
  document.getElementById("7").disabled = true;
  document.getElementById("8").disabled = true;
  document.getElementById("9").disabled = true;
}
