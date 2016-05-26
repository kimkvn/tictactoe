//conditions for winning
// 1-2-3, 4-5-6, 7-8-9
// 1-4-7, 2-5-8, 3-6-9
// 1-5-9, 3-5-7

var blues = [];
var reds = [];

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

    blueCounter();

  });


  // check if blue wins:
  //    yes --> reset
  //    no --> prompt red player to move
};

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

    redCounter();

  });


  // check if red wins:
  //    yes --> reset
  //    no --> prompt blue player to move

};

// $('.square').click(function(){
//   var $result = $(this).attr('class');
//   //alert($result);
//   blues.push($(this).attr('id'));
//   $(this).click(false);
//   $(this).toggleClass('filledBlue');
//
//   console.log(blues);
//
//   counter();
//
// });


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

    // $('.filledBlue').is('.three' && '.two' )
    // ||
    // $('.filledBlue').is('.four' && '.five' && '.six')
    // ||
    // $('.filledBlue').is('.seven' && '.eight' && '.nine')

    // ||
    //
    // $('.filledBlue').is('.one' && '.four' && '.seven')
    // ||
    // $('.filledBlue').is('.two' && '.five' && '.eight')
    // ||
    // $('.filledBlue').is('.three' && '.six' && '.nine')
    //
    // ||
    //
    // $('.filledBlue').is('.one' && '.five' && '.nine')
    // ||
    // $('.filledBlue').is('.three' && '.five' && '.seven')


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

    // $('.filledRed').is('.three' && '.two' )
    // ||
    // $('.filledRed').is('.four' && '.five' && '.six')
    // ||
    // $('.filledRed').is('.seven' && '.eight' && '.nine')

    // ||
    //
    // $('.filledRed').is('.one' && '.four' && '.seven')
    // ||
    // $('.filledRed').is('.two' && '.five' && '.eight')
    // ||
    // $('.filledRed').is('.three' && '.six' && '.nine')
    //
    // ||
    //
    // $('.filledRed').is('.one' && '.five' && '.nine')
    // ||
    // $('.filledRed').is('.three' && '.five' && '.seven')


  ){
    alert('A WINNER IS YOU!');
    reset();
  }

};


var reset = function(){
  $('.square').removeClass('filledBlue');
  $('.square').removeClass('filledRed');
  blues = [];
  reds=[];
};
