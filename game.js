//conditions for winning
// 1-2-3, 4-5-6, 7-8-9
// 1-4-7, 2-5-8, 3-6-9
// 1-5-9, 3-5-7
var blues = [];

$('.square').click(function(){
  var $result = $(this).attr('class');
  //alert($result);
  blues.push($(this).attr('id'));
  $(this).click(false);
  $(this).toggleClass('filledBlue');

  console.log(blues);

  counter();

});
var tally = function(){
  var blues = [];

};

var counter = function(){
  if(
    ($('.one').hasClass('filledBlue') && $('.two').hasClass('filledBlue') && $('.three').hasClass('filledBlue'))
    ||
    ($('.four').hasClass('filledBlue') && $('.five').hasClass('filledBlue') && $('.six').hasClass('filledBlue'))
  ){
    alert('A WINNER IS YOU!');
    reset();
  }
  // var arr = $('.filledBlue');
  // for(i = 0; i < arr.length; i++)
  // {
  //   if(arr[i] )
  //   alert('A WINNER IS YOU!')
  // };
};

var reset = function(){
  $('.square').removeClass('filledBlue');
  blues = [];
};
