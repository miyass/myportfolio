generateBall();
setInterval("generateBall()",1000);
setInterval("removeAll()",10000);

function generateBall() {
    var ran1 = Math.random() * 100;
    var ran2 = Math.random() * 100;
    function ran3(min, max) {
      return Math.random() * (max - min) + min;
    }

    $('#canvas').append('<i class="fa fa-circle fa-1x" aria-hidden="true"></i>');
    $('.fa-circle').css('left', ran1 + '%');
    $('.fa-circle').css('opacity', '0.5');
    $('.fa-circle').animate({
      left: ran2 + '%',
      top: '-20%',
    },
    ran3(20000,90000),
    "linear");
}

function removeAll() {
  var child = $("#canvas").find('.fa-circle');
  child.each(function() {
    var height = parseInt($(this).css('top'));
    if(height < -100){
      $(this).remove();
    }
  })
}
