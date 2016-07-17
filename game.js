//conditions for winning
// 1-2-3, 4-5-6, 7-8-9
// 1-4-7, 2-5-8, 3-6-9
// 1-5-9, 3-5-7





var player ;
var square = $('.square')
var blues = []; //stores blue players moves
var reds = []; //stores red players moves


// GAME START
$('.gameStart').click(function(){
	gameStart();
});

var gameStart = function(){
		$('#p1').show();
		player = 1;
		$('.gameStart').hide();


		square.click(function(){

			if (player === 1){
				$('#p2').show();
				$('#p1').hide();
				$(this).toggleClass('filledBlue');
				blues.push($(this).attr('id'));
		    $('<div class="clickBlock"></div>').insertAfter(this);

				 blueCheck();

				console.log(blues)
				console.log($('.clickBlock'))
				player = 2;

			}
			else if (player = 2){

				$('#p1').show();
				$('#p2').hide();
				$(this).toggleClass('filledRed');
		    reds.push($(this).attr('id'));
		    $('<div class="clickBlock"></div>').insertAfter(this);

				redCheck();

				console.log(reds)
				console.log($('.clickBlock'))
				player = 1

			}
		});
};

// -- check if blue wins
var blueCheck = function(){
  if(
    blueCounter()
  ){
    $('.blueWin').show();
    reset();
  }
	if($('.clickBlock').length === 9){
		$('.draw').show();
		reset();
	}
};


// -- check if red wins
var redCheck = function(){
  if (
    redCounter()
  ){
      $('.redWin').show();
      reset();
  }
	if($('.clickBlock').length === 9){
		$('.draw').show();
		reset();
	}
};





//---conditions for blue winning
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



//---conditions for red winning
var redCounter = function(){
  // for(var i = 0; i < reds.length; i++){
  //    if(
  //      (reds[i] == "one" || "two" || "three")
  //      ||
  //      (reds[i] == "four" || "five" || "six")
  //      ||
  //      (reds[i] == "seven" || "eight" || "nine")
	//
  //      ||
	//
  //      (reds[i] == "one" || "four" || "seven")
  //      ||
  //      (reds[i] == "two" || "five" || "eight")
  //      ||
  //      (reds[i] == "three" || "six" || "nine")
	//
  //      ||
	//
  //      (reds[i] == "one" || "five" || "nine")
  //      ||
  //      (reds[i] == "three" || "five" || "seven")
  //    ){
  //        return true;
  //    }
  // }

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

  )
  {
      return(true);
  }
};



//---if no one wins...YOU GET NOTHING.
if($('.clickBlock').length === 9){
	$('.draw').show();
	reset();
}


//---reset the game, new one?
var reset = function(){
  $('#p1, #p2').hide();
  $('.reset').show();

  $('button.newGameStart').click(function(){
    $('.square').removeClass('filledBlue');
    $('.square').removeClass('filledRed');
    $('.clickBlock').remove();
    blues = [];
    reds=[];
		player = 1;
		$('.reset, .redWin, .blueWin, .draw').hide();
		$('#p1').show();
  });
};
