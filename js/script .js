//declaring arrays

var daysOfWeek = [
  "Sunday",

  "Monday",

  "Tuesday",

  "Wednesday",

  "Thursday",

  "Friday",

  "Saturday"
];

var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

//calling functions

function getAkanName() {
  // Collect data from input fields
  var formData = document.forms[0];

  var year = parseInt(formData.year.value);
  var month = parseInt(formData.month.value);
  var day = parseInt(formData.day.value);

  var male = document.getElementById("male");
  var female = document.getElementById("female");

  //validation

  if (day <= 0 || day > 31) {
    alert("Oops!please enter a valid day");
  } else if (month <= 0 || month > 12 || (month == 2 && day > 29)) {
    alert("Oops!please enter a valid month");
  }

  var day = new Date(year + "/" + month + "/" + day);
  var birthDay = day.getDay();

  if (male.checked == true) {
    alert(
      "You were born on " +
        daysOfWeek[birthDay] +
        " and your akan name is " +
        maleNames[birthDay]
    );
  } else if (female.checked == true) {
    alert(
      "You were born on " +
        daysOfWeek[birthDay] +
        " and your akan name is " +
        femaleNames[birthDay]
    );
  }
}
