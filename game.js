//conditions for winning
// 1-2-3, 4-5-6, 7-8-9
// 1-4-7, 2-5-8, 3-6-9
// 1-5-9, 3-5-7



// GAME START
var gameStart = function(){



};





var blues = []; //stores blue players moves
var reds = []; //stores red players moves

var blueMove = function(){

  //ALERT Blue player to move!
  $('#p1').show();

  // register blue players input
  $('.square').click(function(){
    var $result = $(this).attr('class');
    //alert($result);
    blues.push($(this).attr('id'));
    $(this).toggleClass('filledBlue');

    console.log(blues);

    //disable the square from being clicked again unless new game is started
    $('<div class="clickBlock"></div>').insertAfter(this);
    if(boardCheck()){
      redMove()
      $('#p1').hide()
    }
    return;
  });
    // check if blue wins:
    //    yes --> reset (built into counter function)
    //    no --> prompt red player to move
    //           AND end blue players turn
    return;
};
//-------------end blueMove();


var redMove = function(){

  //ALERT red player to move!
  $('#p2').show();

  // register red players input
  $('.square').click(function(){
    var $result = $(this).attr('class');
    reds.push($(this).attr('id'));
    $(this).toggleClass('filledRed');

    console.log(reds);
    //disable the square from being clicked again unless new game is started
    $('<div class="clickBlock"></div>').insertAfter(this);
    if(boardCheck()){
      blueMove();
      $('#p2').hide();
      return;
    }

    // check if red wins:
    //    yes --> reset (built into counter function)
    //boardCheck();

  });



  //    no --> prompt blue player to move

};
//--------------end redMove();


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
  else{
    return (true);
  }

};
//-------------end boardCheck();


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
    ($('.three').hasClass('filledBlue') && $('.five').hasClass('filledBlue') && $('.seven').hasClass('filledBlue'))

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
    ($('.three').hasClass('filledRed') && $('.five').hasClass('filledRed') && $('.seven').hasClass('filledRed'))

  ){
      return(true);
  }
};
//-----------------end redCounter();


var reset = function(){
  $('.square').removeClass('filledBlue');
  $('.square').removeClass('filledRed');
  $('.clickBlock').remove();
  blues = [];
  reds=[];
  $('#p1, #p2').hide();
  $('.reset').show();
  $('button.newGameStart').click(function(){
    console.log('1v1 ME NOOB')
  });
};
