var myDiv = document.getElementById("num-age");

function ageInYear() {

    var myAge = document.getElementById("EnterAge").value,

        result = myAge;


    if (myAge === ""){

        myDiv.innerHTML = "This Field Can't Be Empty.";

    } else if (isNaN(myAge)){

        myDiv.innerHTML = "This Field Accept Number Only.";

    } else if (myAge === "0"){

        myDiv.innerHTML = "The value Must Not Be Zero '0'.";

    } else{

        myDiv.innerHTML = "Your Age In Years = " + result + " Years";

    }

}
function ageInMonth() {

    var myAge = document.getElementById("EnterAge").value,

        result = myAge * 12;

    myDiv.innerHTML = "Your Age In Months = " + result + " Months";

}
function ageInDay() {

    var myAge = document.getElementById("EnterAge").value,

        result = myAge * 365;

    myDiv.innerHTML = "Your Age In Days = " + result + " Days";

}
function ageInHour() {

    var myAge = document.getElementById("EnterAge").value,

        result = myAge * 365 * 24;

    myDiv.innerHTML = "Your Age In Hours = " + result + " Hours";

}
function ageInMinute() {

    var myAge = document.getElementById("EnterAge").value,

        result = myAge * 365 * 24 * 60;

    myDiv.innerHTML = "Your Age In Minutes = " + result + " Minutes";

}
function ageInSecond() {

        var myAge=document.getElementById("EnterAge").value,

        result = myAge * 365 * 24 * 60 * 60;

    myDiv.innerHTML = "Your Age In Seconds = " + result + " Seconds";

}