var currentDay = $('#currentDay');

currentDay.text(moment().format("dddd MMM Do YYYY"));


$(".container").children("div.time-block").each(function() {
    var divTime = moment($(this).text(), 'h:mm A');
    var nowTime = moment().format();
    if (divTime.isSame(nowTime, 'hour')) {
        $(this).next().addClass('present');
    }  
    if (divTime.isAfter(nowTime, 'hour')) {
        $(this).next().addClass('future');
    } 
    if (divTime.isBefore(nowTime, 'hour')) {
        $(this).next().addClass('past');
    }
  });

