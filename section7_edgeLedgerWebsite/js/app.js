var map;
function initMap() {

  // location
  const loc = { lat: 32.798930, lng: -117.237070};

  // center map on location
  map = new google.maps.Map(document.querySelector('.map'), {
    center: loc,
    zoom: 8
  });

  // The marker, positioned at location
  const marker = new google.maps.Marker({position: loc, map: map });
}

$('#navbar a, .btn')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 65
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  // Sticky navbar background
  window.addEventListener('scroll',function() {
    if(this.window.scrollY > 150) {
      this.document.querySelector('#navbar').style.opacity = 0.9;
    }else{
      this.document.querySelector('#navbar').style.opacity = 1.0;
    }
  });