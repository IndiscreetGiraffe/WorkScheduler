var currentDay = document.getElementById("currentDay");
var timeBlock = document.getElementById("time-block");
var hour = document.getElementById("hour");
var saveBtn = $(".saveBtn");

currentDay.innerText = moment().format("dddd MMM Do YYYY");

var currentHour = moment().format('h');
var currentTime = parseInt(currentHour);

if (9 > currentTime) {
    $('.input').addClass('future');
} else if (currentTime == 9) {
    $('.input').addClass('present');
} else {
    $('.input').addClass('past');
}

saveBtn.on("click", function() {
    console.log(this);
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".input").val();

    localStorage.setItem(time, plan);
});