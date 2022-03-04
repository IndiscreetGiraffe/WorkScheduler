var currentDay = document.getElementById("currentDay");
var timeBlock = document.getElementById("time-block");
var hour = document.getElementById("hour");
var saveBtn = $(".saveBtn");

currentDay.innerText = moment().format("dddd MMM Do YYYY");

var currentHour = moment().format('h');
//the box changes color depending on what time it is
if (currentHour > hour) {
    $('.input').addClass('future');
} else if (currentHour == hour ) {
    $('.input').addClass('present');
} else {
    $('.input').addClass('past');
}
//the content saves in local storage
saveBtn.on("click", function() {
    console.log(this);
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".input").val();

    localStorage.setItem(time, plan);
});

    $(".hour").each(function() {
        var currentHour = $(this).text();
        var currentPlan = localStorage.getItem(currentHour);

        if(currentPlan !== null) {
            $(this).siblings(".input").val(currentPlan);
        }
    });

