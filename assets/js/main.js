$(document).ready(function(){
  // Add smooth scrolling to all links
  $("#scroll").on('click', function() {
    $('html, body').animate({
        scrollTop: $('#start-project').offset().top
      }, 1600);
  }) 
});

function myFunction(x) {
  if (x.matches) { // If media query matches
    $('#packages-info').removeClass('container');
    $('#packages-info').addClass('container-fluid');

    $('#container-sm-navbar').removeClass('container-sm');
    $('#container-sm-navbar').addClass('container-fluid');

    $('#main-container').removeClass('container');
    $('#main-container').addClass('container-fluid');

    $('#heroes-container').removeClass('container');
    $('#heroes-container').addClass('container-fluid');
  } else {
    $('#packages-info').removeClass('container-fluid');
    $('#packages-info').addClass('container');

    $('#container-sm-navbar').removeClass('container-fluid');
    $('#container-sm-navbar').addClass('container-sm');

    $('#main-container').removeClass('container-fluid');
    $('#main-container').addClass('container');

    $('#heroes-container').removeClass('container-fluid');
    $('#heroes-container').addClass('container');
  }
}

var x = window.matchMedia("(max-width: 767px)")
myFunction(x)
x.addListener(myFunction) // Attach listener function on state changes