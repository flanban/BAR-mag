$(window).load(function() {
  $('#menu-toggle').click(function() {
      var $lefty = $(this).parent();
      $lefty.animate({
        left: [parseInt($lefty.css('left'),10) == 0 ?
          -$lefty.outerWidth() :
          0],
      });
    }); 
    
    $("#menu-toggle").text($(this).next().is(':visible') ? "hide" : "show")
    
    
    
});
