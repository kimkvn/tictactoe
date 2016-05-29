//conditions for winning
// 1-2-3, 4-5-6, 7-8-9
// 1-4-7, 2-5-8, 3-6-9
// 1-5-9, 3-5-7



// GAME START
var gameStart = function(){



};

var player = 1;
var p1 = [];
var p2 = [];
var square = $('.square')

var game = function(square){
	$('.square').click(function(){
  	if (player = 1){
  		//p1.push($(this).attr('id'))
      player = 0
      console.log('p1 moved')
  	} else{
    	//p2.push($(this).attr('id'))
      console.log('p2 moved')
      player = 1;
    }

  });

};
game();



var blues = []; //stores blue players moves
var reds = []; //stores red players moves

var blueMove = function(){

  //ALERT Blue player to move!
  $('#p1').show();
  $('#p2').hide();
  // register blue players input
  $('.square').click(function(){
    $(this).toggleClass('filledBlue');
    blues.push($(this).attr('id'));

    console.log(blues);

    //disable the square from being clicked again unless new game is started
    $('<div class="clickBlock"></div>').insertAfter(this);

    // check if blue wins:
    //    yes --> reset (built into counter function)
    //    no --> red player to move

    if(blueCheck()){
      //redMove()
      console.log("no winner yet")
      return;
    }
    return;
  });
};
//-------------end blueMove();


var redMove = function(){

  //ALERT red player to move!
  $('#p2').show();
  $('#p1').hide();
  // register red players input
  $('.square').click(function(){
    $(this).toggleClass('filledRed');
    reds.push($(this).attr('id'));


    console.log(reds);
    //disable the square from being clicked again unless new game is started
    $('<div class="clickBlock"></div>').insertAfter(this);

    // check if red wins:
    //    yes --> reset (built into counter function)
    //    no --> blue player to move
    if(redCheck()){
      console.log("no winner yet")
      return;
    }
    return;
  });

};
//--------------end redMove();

var blueCheck = function(){
  if(
    blueCounter()
  ){
    $('.blueWin').show();
    reset();
  }
  else{
    return true;
  }
};

var redCheck = function(){
  if (
    redCounter()
  ){
      $('.redWin').show();
      reset();
  }
  else{
    return true;
  }
};

// var boardCheck = function(){
//   if(
//     blueCounter()
//   ){
//     alert('A WINNER IS BLUE PLAYER!');
//     reset();
//   }
//   else if (
//     redCounter()
//   ){
//       alert('A WINNER IS RED PLAYER!')
//       reset();
//   }
//   else{
//     console.log('No Winners yet')
//     return (true);
//   }
//
// };
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
  for(var i = 0; i < reds.length; i++){
     if(
       (reds[i] == "one" || "two" || "three")
       ||
       (reds[i] == "four" || "five" || "six")
       ||
       (reds[i] == "seven" || "eight" || "nine")

       ||

       (reds[i] == "one" || "four" || "seven")
       ||
       (reds[i] == "two" || "five" || "eight")
       ||
       (reds[i] == "three" || "six" || "nine")

       ||

       (reds[i] == "one" || "five" || "nine")
       ||
       (reds[i] == "three" || "five" || "seven")
     ){
         return true;
     }
  }

  // if(
  //   ($('.one').hasClass('filledRed') && $('.two').hasClass('filledRed') && $('.three').hasClass('filledRed'))
  //   ||
  //   ($('.four').hasClass('filledRed') && $('.five').hasClass('filledRed') && $('.six').hasClass('filledRed'))
  //   ||
  //   ($('.seven').hasClass('filledRed') && $('.eight').hasClass('filledRed') && $('.nine').hasClass('filledRed'))
  //
  //   ||
  //
  //   ($('.one').hasClass('filledRed') && $('.four').hasClass('filledRed') && $('.seven').hasClass('filledRed'))
  //   ||
  //   ($('.two').hasClass('filledRed') && $('.five').hasClass('filledRed') && $('.eight').hasClass('filledRed'))
  //   ||
  //   ($('.three').hasClass('filledRed') && $('.six').hasClass('filledRed') && $('.nine').hasClass('filledRed'))
  //
  //   ||
  //
  //   ($('.one').hasClass('filledRed') && $('.five').hasClass('filledRed') && $('.nine').hasClass('filledRed'))
  //   ||
  //   ($('.three').hasClass('filledRed') && $('.five').hasClass('filledRed') && $('.seven').hasClass('filledRed'))
  //
  // )
  {
      return(true);
  }
};
//-----------------end redCounter();


var reset = function(){
  $('#p1, #p2').hide();
  $('.reset').show();
  $('button.newGameStart').click(function(){
    $('.square').removeClass('filledBlue');
    $('.square').removeClass('filledRed');
    $('.clickBlock').remove();
    blues = [];
    reds=[];
    console.log('1v1 ME NOOB')
  });
};
