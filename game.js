//conditions for winning
// 1-2-3, 4-5-6, 7-8-9
// 1-4-7, 2-5-8, 3-6-9
// 1-5-9, 3-5-7

$('.square').click(function(){
  var $result = $(this).attr('class');
  //alert($result);
  $(this).toggleClass('filled');

  counter();

});

var counter = function(){
  if(
    $('.one').hasClass('filled') && $('.two').hasClass('filled') && $('.three').hasClass('filled')
  ){
    alert('A WINNER IS YOU!')
  };
};
