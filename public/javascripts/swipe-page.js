  // Bind to "mobileinit" before you load jquery.mobile.js
    // Set the default transition to slide
    $(document).on( "mobileinit", function() {
      $.mobile.defaultPageTransition = "slide";
    }); 
    
    $(document).on('pageinit', function(event){
          
      $('div.ui-page').on("swipeleft", function (e) {
         e.stopImmediatePropagation();
 e.preventDefault();
      var nextpage = $( this ).attr( "data-next" );
        if (nextpage) {
        $.mobile.changePage(nextpage+'.html', "slide", false, true);
        }
      });
    
      $('div.ui-page').on("swiperight", function (e) {
         e.stopImmediatePropagation();
 e.preventDefault();
      var prevpage = $( this ).attr( "data-prev" );
      if (prevpage) {
        $.mobile.changePage(prevpage+'.html', { transition: "slide", reverse: true }, true, true);
      }
      });
  
      $(document).on('click', '#goforward', function (e) {
         e.stopImmediatePropagation();
 e.preventDefault();
      var nextpage =  $.mobile.activePage.attr( "data-next" );
        if (nextpage) {
        $.mobile.changePage(nextpage+'.html', "slide", false, true);
        if ($shareopen == 1) {
        $('.sharebox').animate({ opacity: 0, bottom: '0px'},200, function(){ $('.sharebox').hide();});
        $shareopen = 0;
        $('#showShare').removeClass('green');
      }
      if ($textopen == 1) {
        $('.pageContent').fadeOut(300);
        $textopen = 0;
        $('#showText').removeClass('green');
      }
        }
      });
      
    
    $(document).on('click', '#goback',  function (e) {
       e.stopImmediatePropagation();
 e.preventDefault();
      var prevpage =  $.mobile.activePage.attr( "data-prev" );
      if (prevpage) {
        $.mobile.changePage(prevpage+'.html', { transition: "slide", reverse: true });
        if ($shareopen == 1) {
        $('.sharebox').animate({ opacity: 0, bottom: '0px'},200, function(){ $('.sharebox').hide();});
        $shareopen = 0;
        $('#showShare').removeClass('green');
      }
      if ($textopen == 1) {
        $('.pageContent').fadeOut(300);
        $textopen = 0;
        $('#showText').removeClass('green');
      }
      }
      });
    
    var $textopen=0;
    $(document).on('click', '#showText', function (e) {
       e.stopImmediatePropagation();
      e.preventDefault();
      if ($textopen == 0) {
        $('.pageContent').fadeIn(300);
        $textopen = 1;
        
        $('#showText').addClass('green');
      }
      else if ($textopen == 1) {
        $('.pageContent').fadeOut(300);
        $textopen = 0;
        $('#showText').removeClass('green');
      }
      });
      
      $('.sharebox').hide();
       $('.sharebox').css('opacity',0);

      var $shareopen=0;
    $(document).on('click', '#showShare', function (e) {
       e.stopImmediatePropagation();
      e.preventDefault();
      if ($shareopen == 0) {
         $('.sharebox').show();
         $('.sharebox').animate({ opacity: 1, bottom: '60px'},200);
        $shareopen = 1;
        $('#showShare').addClass('green');
      }
      else if ($shareopen == 1) {
             
        $('.sharebox').animate({ opacity: 0, bottom: '0px'},200, function(){ $('.sharebox').hide();});
        $shareopen = 0;
        $('#showShare').removeClass('green');
      }
      });
    
$(document).on('click', '.hide-btn', function () {
        $('.bottom').animate({ bottom: '-52px'},200);
        $('.hidden').animate({ bottom: '0px'},200);
        if ($shareopen == 1) {
        $('.sharebox').animate({ opacity: 0, bottom: '0px'},200, function(){ $('.sharebox').hide();});
        $shareopen = 0;
        $('#showShare').removeClass('green');
      }

    });
$(document).on('click', '.hidden', function () {
      $('.bottom').animate({ bottom: '0px'},200);
      $('.hidden').animate({ bottom: '-52px'},200);

    });
    
if($('.big-page').is(':visible')) {
$('div[data-role="page"]').each(function(){
      $(this).removeAttr("style");
});
}
  
  $('img').on('dragstart', function(event) { event.preventDefault(); });

  $('img').bind('contextmenu', function(e) {
    return false;
  });


  $('.ui-content img').load(function() { 
  var myH = $(window).height();
  var myC = $(this).height();
    if(myH>myC){
    var myM = (myH-myC)/2;
    $('.ui-page-active').children('.ui-content').css('margin-top',myM+'px');
    }
  });

      

});

  

$( document ).on( "pageshow", ".demo-page", function() {
  
    
     document.title = $(this).attr('data-metatitle');
     
     var next =  $.mobile.activePage.attr( "data-next" );
     var prev =  $.mobile.activePage.attr( "data-prev" );
  
    if (!prev) {$('#goback').addClass('nav-disabled');}
    else {$('#goback').removeClass('nav-disabled');}
    if (!next) { $('#goforward').addClass('nav-disabled');}
    else {$('#goforward').removeClass('nav-disabled');}

  
  var pageStuff = $(this).text();
  var mytitle = $(this).attr('data-metatitle');
  var mycolor = $(this).css("background-color");  
  var myURL = window.location;
  var fbURL = 'http://www.facebook.com/sharer.php?u='+encodeURIComponent(myURL)+'&amp;t='+encodeURIComponent(mytitle);
  var twURL = 'http://twitter.com/share?url='+myURL+'&text=Check+out+this+BAR+Magazine+article&via=bytheindustry&hashtags=fortheindustry,bytheindustry';
  
  $('.fblink').attr('href', fbURL);
  $('.twitterlink').attr('href', twURL);

   $('meta[name=description]').attr('content', pageStuff);
   $('meta[name=title]').attr('content', mytitle);
  $("meta[property='og\\:description']").attr("content", pageStuff);
  $("meta[property='og\\:title']").attr("content", mytitle);
  $("meta[property='og\\:url']").attr("content", myURL);



var mycolor = $(this).css("background-color");  
    if(mycolor=="rgb(153, 153, 153)"){
    $('.hidden').css('color','#ffffff');
    }
    else {$('.hidden').css('color','#999999');}

$('img[usemap]').rwdImageMaps();
  
  

});