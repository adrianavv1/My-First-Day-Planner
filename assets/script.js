$(document).ready(function() {
    var currentDay = moment().format('dddd, MMMM Do YYYY');
    $("#currentDay").text(currentDay); //Display date in header
 
    // load the data from localstorage
    var descriptionFor9AM = localStorage.getItem("9AM");
    $("#textarea-9AM").val(descriptionFor9AM);

    var descriptionFor10AM = localStorage.getItem("10AM");
    $("#textarea-10AM").val(descriptionFor10AM);

    var descriptionFor11AM = localStorage.getItem("11AM");
    $("#textarea-11AM").val(descriptionFor11AM);

    var descriptionFor12PM = localStorage.getItem("12PM");
    $("#textarea-12PM").val(descriptionFor12PM);

    var descriptionFor1PM = localStorage.getItem("1PM");
    $("#textarea-1PM").val(descriptionFor1PM);

    var descriptionFor2PM = localStorage.getItem("2PM");
    $("#textarea-2PM").val(descriptionFor2PM);

    var descriptionFor3PM = localStorage.getItem("3PM");
    $("#textarea-3PM").val(descriptionFor3PM);

    var descriptionFor4PM = localStorage.getItem("4PM");
    $("#textarea-4PM").val(descriptionFor4PM);

    var descriptionFor5PM = localStorage.getItem("5PM");
    $("#textarea-5PM").val(descriptionFor5PM);



$("button").on('click', function() {
    var time = $(this).attr("data-hour");
    var textAreaId = "#textarea-" + time;

    var description = $(textAreaId).val();

    // save time and description to local storage
    localStorage.setItem(time, description);

})



  //update clock in footer//
  setInterval(function() {
    var currentTime = moment().format('hh:mm:ss a');
    $("#currentTime").text(currentTime);
}, 1000);


});

