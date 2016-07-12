$(document).ready(function(){
  var game = new bowlingGame();

  $('.roll').on('click', function(event){
    event.preventDefault();
    game.turn();
    var $location = $( "div.score:empty" ).first();
    var $location2 = $location.next( "div.score:empty" ).first();
    var prevScore = Number($location.parents().prev().find('.frame-total').text());
    console.log(prevScore);


    var roll1Score = game.frame[0];
    var roll2Score = game.frame[1];
    var frameScore = prevScore + roll1Score + roll2Score;
    if (roll1Score == 10) {
      roll2Score = "X";
      roll1Score = "-";
      frameScore = "-";
    }
    if (roll1Score != 10 && frameScore == 10) {
      roll2Score = "/";
      roll1Score = "-";
      frameScore = "-";
    }


    $location.text(roll1Score);
    $location2.text(roll2Score);

    var $frameScoreLoc = $( "div.frame-total:empty" ).first();
    $frameScoreLoc.text(frameScore);
    game.turnEnds();

  });

});