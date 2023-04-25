// Initialize the year array to store leap years
var year = [];

// Get the form element from the DOM
var formEl = document.getElementById("yearForm");

// Get the message element from the DOM
var messageEl = document.getElementById("message");

// Handle form submit event
formEl.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent form submission
  var ind = event.target.elements.year.value; // get year input value

  // Check if the input is a valid year
  if (isNaN(ind) || ind === "") {
    messageEl.innerHTML = "Please enter a valid year.";
    return;
  }

  // Check if the year is a leap year
  if (ind % 400 === 0 || (ind % 4 === 0 && ind % 100 !== 0)) {
    messageEl.innerHTML = ind + " is a leap year!";
    year.push(ind);
    document.getElementById("leapYears").innerHTML +=
      "<br><b>Leap year: </b>" + ind;
  } else {
    messageEl.innerHTML = ind + " is not a leap year.  :( ";
  }

  // Clear the form input
  event.target.reset();
});

// Handle restart button click event
document.querySelector(".restart").addEventListener("click", function () {
  year = []; // clear the year array
  document.getElementById("leapYears").innerHTML = ""; // clear the leap year display
});
