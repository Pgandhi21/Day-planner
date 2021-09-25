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

$(".container").children("button").click(function(event) {
    event.preventDefault();
    console.log("event trigger");
    var key = $(this).prev().attr('id');
    var textArea = $(this).prev().val();
    console.log(key);
    console.log(textArea);
    localStorage.setItem(key,textArea);
});

$('#Text1').val(localStorage.getItem('Text1'));
$('#Text2').val(localStorage.getItem('Text2'));
$('#Text3').val(localStorage.getItem('Text3'));
$('#Text4').val(localStorage.getItem('Text4'));
$('#Text5').val(localStorage.getItem('Text5'));
$('#Text6').val(localStorage.getItem('Text6'));
$('#Text7').val(localStorage.getItem('Text7'));
$('#Text8').val(localStorage.getItem('Text8'));
$('#Text9').val(localStorage.getItem('Text9'));