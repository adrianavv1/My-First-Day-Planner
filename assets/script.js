$(document).ready(function() {
    
    var currentHour = moment().hour()
    var currentDay = moment().format('dddd, MMMM Do YYYY');
    $("#currentDay").text(currentDay); //Display date in header
 
    // load the data from localstorage
    var descriptionFor9AM = localStorage.getItem("9AM");
    $("#textarea-9AM").val(descriptionFor9AM);
    
    if (9< currentHour) {
        $("#textarea-9AM").addClass("past")
    } else if(9===currentHour) {
        $("#textarea-9AM").addClass("present")
    } else { 
        $("#textarea-9AM").addClass("future")
    }
     




    var descriptionFor10AM = localStorage.getItem("10AM");
    $("#textarea-10AM").val(descriptionFor10AM);

    if (10< currentHour) {
        $("#textarea-10AM").addClass("past")
    } else if(10===currentHour) {
        $("#textarea-10AM").addClass("present")
    } else { 
        $("#textarea-10AM").addClass("future")
    }
     

    var descriptionFor11AM = localStorage.getItem("11AM");
    $("#textarea-11AM").val(descriptionFor11AM);

    if (11< currentHour) {
        $("#textarea-11AM").addClass("past")
    } else if(11===currentHour) {
        $("#textarea-11AM").addClass("present")
    } else { 
        $("#textarea-11AM").addClass("future")
    }
     

    var descriptionFor12PM = localStorage.getItem("12PM");
    $("#textarea-12PM").val(descriptionFor12PM);

    if (12< currentHour) {
        $("#textarea-12PM").addClass("past")
    } else if(9===currentHour) {
        $("#textarea-12PM").addClass("present")
    } else { 
        $("#textarea-12PM").addClass("future")
    }
     

    var descriptionFor1PM = localStorage.getItem("1PM");
    $("#textarea-1PM").val(descriptionFor1PM);

    if (13< currentHour) {
        $("#textarea-1PM").addClass("past")
    } else if(13===currentHour) {
        $("#textarea-1PM").addClass("present")
    } else { 
        $("#textarea-1PM").addClass("future")
    }
     


    var descriptionFor2PM = localStorage.getItem("2PM");
    $("#textarea-2PM").val(descriptionFor2PM);

    if (14< currentHour) {
        $("#textarea-2PM").addClass("past")
    } else if(14===currentHour) {
        $("#textarea-2PM").addClass("present")
    } else { 
        $("#textarea-2PM").addClass("future")
    }
     

    var descriptionFor3PM = localStorage.getItem("3PM");
    $("#textarea-3PM").val(descriptionFor3PM);

    if (15< currentHour) {
        $("#textarea-3PM").addClass("past")
    } else if(15===currentHour) {
        $("#textarea-3PM").addClass("present")
    } else { 
        $("#textarea-3PM").addClass("future")
    }
     

    var descriptionFor4PM = localStorage.getItem("4PM");
    $("#textarea-4PM").val(descriptionFor4PM);

    if (16< currentHour) {
        $("#textarea-4PM").addClass("past")
    } else if(16===currentHour) {
        $("#textarea-4PM").addClass("present")
    } else { 
        $("#textarea-4PM").addClass("future")
    }
     

    var descriptionFor5PM = localStorage.getItem("5PM");
    $("#textarea-5PM").val(descriptionFor5PM);

    if (17< currentHour) {
        $("#textarea-5PM").addClass("past")
    } else if(17===currentHour) {
        $("#textarea-5PM").addClass("present")
    } else { 
        $("#textarea-5PM").addClass("future")
    }
     



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

