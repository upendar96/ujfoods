var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "Formget" && password == "formget#123"){
alert ("Login successfully");
window.location = "ujfood.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}



function button1() {
  var value=
  parseInt(document.getElementById('number').value,10);
  value=isNaN(value)?0:value;
  value++;
  document.getElementById('number').value=value;
}
function button2(){
  var value=
  parseInt(document.getElementById('number').value,10);
  value=isNaN(value)?0:value;
  value--;
  document.getElementById('number').value=value;
} 

