// Initialize the year array to store leap years
var year = [];

// Get the message element from the DOM
var messageEl = document.getElementById("message");

// Loop to continue prompting for leap years until the user decides to stop
while (true) {
  // Prompt the user for a year
  var ind = prompt(
    "Please type a leap year, or type 'stop' to end the process:"
  );

  // Check if the user wants to stop the process
  if (ind === "stop") {
    break;
  }

  // Check if the input is a valid year
  if (isNaN(ind) || ind === "") {
    messageEl.innerHTML = "Please enter a valid year.";
    continue;
  }

  // Check if the year is a leap year
  if (ind % 400 === 0 || (ind % 4 === 0 && ind % 100 !== 0)) {
    messageEl.innerHTML = ind + " is a leap year!";
    year.push(ind);
    console.log(year[ind]);
    document.write("<br><b>Leap year: </b>" + ind);
  } else {
    messageEl.innerHTML = ind + " is not a leap year.  :( ";
    continue;
  }
}

// Display the leap years stored in the year array
if (year.length > 0) {
  var leapYearsEl = document.createElement("div");
  leapYearsEl.innerHTML = "<br><br>Leap Years:<br>";
  for (var i = 0; i < year.length; i++) {
    leapYearsEl.innerHTML += year[i] + "<br>";
  }
  document.body.appendChild(leapYearsEl);
}

const reset = document.querySelector(".restart");
