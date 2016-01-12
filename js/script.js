//$("#head img").addClass("load");​
//document.getElementById("test").children[0].className += " load";
//$("#test p").delay(1000).animate({ opacity: 1 }, 700);​

$(document).ready(function(){
	$("#pic").fadeIn(3000);
});

$(function(){
    $('.fadein img:gt(0)').hide();
    setInterval(function(){
      $('.fadein :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.fadein');}, 
      3000);
});
