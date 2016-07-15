$(document).ready(function(){
  var game = new bowlingGame();

  $('.roll').on('click', function(event){
    event.preventDefault();
    game.turn();
    var $location = $( "div.score:empty" ).first();
    var $location2 = $location.next( "div.score:empty" ).first();
    var prevFrame = game.scorecard[game.scorecard.length-2];
    var currentFrame = game.scorecard[game.scorecard.length-1];
    var prevScore = Number($location.parents().prev().find('.frame-total').text());
    var prevPrevScore = Number($location.parents().prev().prev().find('.frame-total').text());
    var roll1Score = game.frame[0];
    var roll2Score = game.frame[1];
    var frameTotal = roll1Score + roll2Score;
    var frameScore = prevScore + roll1Score + roll2Score;
    if (roll1Score == 10) {
      roll2Score = "X";
      roll1Score = "-";
      frameScore = "-";
    }
    else if (roll1Score != 10 && frameTotal == 10) {
      roll2Score = "/";
      frameScore = "-";
    }

    $location.text(roll1Score);
    $location2.text(roll2Score);

    var $frameScoreLoc = $( "div.frame-total:empty" ).first();
    var $prevFrameScoreLoc = $($frameScoreLoc.parents().prev().find(".frame-total"));

    if (game.scorecard.length > 1 && prevFrame[0] == 10) {
      var afterStrikeScore = prevPrevScore + 10 + 2*(roll1Score + roll2Score);
      var StrikeScore = afterStrikeScore - roll1Score - roll2Score;
      $frameScoreLoc.text(afterStrikeScore);
      $prevFrameScoreLoc.text(StrikeScore);
    }
    else if (game.scorecard.length > 1 && prevFrame[0] != 10 && prevFrame[0] + prevFrame[1] == 10) {
      var afterSpareScore = prevPrevScore + 10 + 2*(roll1Score) + roll2Score;
      var spareScore = afterSpareScore - roll1Score - roll2Score;
      $frameScoreLoc.text(afterSpareScore);
      $prevFrameScoreLoc.text(spareScore);

    }
    else {
      $frameScoreLoc.text(frameScore);
    }
      game.turnEnds();
  });

});