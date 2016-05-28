//conditions for winning
// 1-2-3, 4-5-6, 7-8-9
// 1-4-7, 2-5-8, 3-6-9
// 1-5-9, 3-5-7

var blues = []; //stores blue players moves
var reds = []; //stores red players moves

var blueMove = function(){

  //ALERT Blue player to move!
  $('#p1').show();
  $('#p2').hide();

  // register blue players input
  $('.square').click(function(){
    var $result = $(this).attr('class');
    //alert($result);
    blues.push($(this).attr('id'));
    $(this).click(false);
    $(this).toggleClass('filledBlue');

    console.log(blues);

    // check if blue wins:
    //    yes --> reset (built into counter function)
    blueCounter();

  });

    //    no --> prompt red player to move

};
//-------------end blueMove();


var redMove = function(){

  //ALERT red player to move!
  $('#p2').show();
  $('#p1').hide();

  // register blue players input
  $('.square').click(function(){
    var $result = $(this).attr('class');
    //alert($result);
    reds.push($(this).attr('id'));
    $(this).click(false);
    $(this).toggleClass('filledRed');

    console.log(reds);
    // check if red wins:
    //    yes --> reset (built into counter function)
    redCounter();

  });



  //    no --> prompt blue player to move

};
//--------------end redMove();


var blueCounter = function(){
  if(
    ($('.one').hasClass('filledBlue') && $('.two').hasClass('filledBlue') && $('.three').hasClass('filledBlue'))
    ||
    ($('.four').hasClass('filledBlue') && $('.five').hasClass('filledBlue') && $('.six').hasClass('filledBlue'))
    ||
    ($('.seven').hasClass('filledBlue') && $('.eight').hasClass('filledBlue') && $('.nine').hasClass('filledBlue'))

    ||

    ($('.one').hasClass('filledBlue') && $('.four').hasClass('filledBlue') && $('.seven').hasClass('filledBlue'))
    ||
    ($('.two').hasClass('filledBlue') && $('.five').hasClass('filledBlue') && $('.eight').hasClass('filledBlue'))
    ||
    ($('.three').hasClass('filledBlue') && $('.six').hasClass('filledBlue') && $('.nine').hasClass('filledBlue'))

    ||

    ($('.one').hasClass('filledBlue') && $('.five').hasClass('filledBlue') && $('.nine').hasClass('filledBlue'))
    ||
    ($('.three').hasClass('filledBlue') && $('.five').hasClass('filledBlue') && $('.three').hasClass('filledBlue'))

  ){
    return(true);
  }
};
//----------------end blueCounter();

var redCounter = function(){
  if(
    ($('.one').hasClass('filledRed') && $('.two').hasClass('filledRed') && $('.three').hasClass('filledRed'))
    ||
    ($('.four').hasClass('filledRed') && $('.five').hasClass('filledRed') && $('.six').hasClass('filledRed'))
    ||
    ($('.seven').hasClass('filledRed') && $('.eight').hasClass('filledRed') && $('.nine').hasClass('filledRed'))

    ||

    ($('.one').hasClass('filledRed') && $('.four').hasClass('filledRed') && $('.seven').hasClass('filledRed'))
    ||
    ($('.two').hasClass('filledRed') && $('.five').hasClass('filledRed') && $('.eight').hasClass('filledRed'))
    ||
    ($('.three').hasClass('filledRed') && $('.six').hasClass('filledRed') && $('.nine').hasClass('filledRed'))

    ||

    ($('.one').hasClass('filledRed') && $('.five').hasClass('filledRed') && $('.nine').hasClass('filledRed'))
    ||
    ($('.three').hasClass('filledRed') && $('.five').hasClass('filledRed') && $('.three').hasClass('filledRed'))

  ){
      return(true);
  }
};
//-----------------end redCounter();

var boardCheck = function(){
  if(
    blueCounter()
  ){
    alert('A WINNER IS BLUE PLAYER!');
    reset();
  }
  else if (
    redCounter()
  ){
      alert('A WINNER IS RED PLAYER!')
      reset();
  }
};


var reset = function(){
  $('.square').removeClass('filledBlue');
  $('.square').removeClass('filledRed');
  blues = [];
  reds=[];
};
