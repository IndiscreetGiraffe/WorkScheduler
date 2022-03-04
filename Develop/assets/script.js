var currentDay = document.getElementById("currentDay");
var timeBlock = document.getElementById("time-block");
var hour = document.getElementById("hour");


currentDay.innerText = moment().format("dddd MMM Do YYYY");

var currentHour = moment().format('h');
var currentTime = parseInt(currentHour);

if (currentHour > currentTime) {
    $('.input').addClass('future');
} else if (currentTime == 9) {
    $('.input').addClass('present');
} else {
    $('.input').addClass('past');
};
