$(window).load(function() {
  $('#thumbnail-toggle').click(function(){
    $('#thumb-nav-wrap').slideToggle(function() {
        $("#thumbnail-toggle").text($(this).is(':visible') ? "Hide" : "Show");
      });
  });
  function initButton() {
    var toggleBtnWidth = $('#thumbnail-toggle').width();
    var toggleBtnOffset = toggleBtnWidth/2;
    $('#thumbnail-toggle').css('margin-left', - toggleBtnOffset);
  }
  initButton();
});