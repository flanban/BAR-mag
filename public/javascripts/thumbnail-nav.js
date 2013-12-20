$(window).load(function() {
  $('#thumbnail-toggle').click(function(){
    $('#thumb-nav-wrap').slideToggle(function() {
        $("#thumbnail-toggle").text($(this).is(':visible') ? "Hide" : "Show");
      });
  });
});