$(document).ready(function(){
  $("#scroll").on('click', function() {
    $('html, body').animate({
        scrollTop: $('#start-project').offset().top
      }, 1600);
  }) 
});
