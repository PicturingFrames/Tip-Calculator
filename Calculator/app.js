//Calculate the tip
function calculateTip(){
  let billM = document.getElementById("billAmount").value;
  let Quality = document.getElementById("selectRating").value;
  let numOfPeople = document.getElementById("people-number").value;


//Validate input
if (billM === "" || Quality == 0) {
  alert("Please enter the values");
  return;
}

//Check to see if this input is empty or less than or equal to 1
if (numOfPeople === "" || numOfPeople <= 1) {
  numOfPeople = 1;
  document.getElementById("each").style.display = "none";
} else {
  document.getElementById("each").style.display = "block";
}

//Calculate the tip
let total = (billM * Quality) / numOfPeople;
//round to two decimal places
total = Math.round(total * 100) / 100;
//allows us to always have two digits after the decimal point
total = total.toFixed(2);
//Display the tip
document.getElementById("total").style.display = "block";
document.getElementById("tip").innerHTML = total;

}

//Hide the tip amount on load
document.getElementById("total").style.display = "none";
document.getElementById("each").style.display = "none";

//Click to call the function
document.getElementById("calculate").onclick = function() {
  calculateTip();
};