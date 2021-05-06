$(document).ready(function(){
  // Add smooth scrolling to all links
  $("#scroll").on('click', function() {
    $('html, body').animate({
        scrollTop: $('#start-project').offset().top
      }, 1600);
  }) 
});