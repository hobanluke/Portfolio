//smooth scrolling - anchor click

//$('a[href*="#"]:not([href="#"])').click(function() {
//  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//    var target = $(this.hash);
//      var offset = -20; //Offset of 20px
//    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//    if (target.length) {
//      $('html, body').animate({
//        scrollTop: target.offset().top + offset
//      }, 300);
//      return false;
//    }
//  }
//});

$("#video-container").click(function() {
    var offset = -20; 

    $('html, body').animate({
        scrollTop: $("").offset().top + offset
    }, 300);
  return false;
});

	


$('#toggle-menu').click(function() {
   $(this).toggleClass('active');
    $('.popup-section').toggleClass('open');
    $('html').toggleClass('open');
  });
$('.popup-section').click(function() {
   $(this).toggleClass('active');
    $('.popup-section').removeClass('open');
    $('.button_container').removeClass('active');
    $('html').removeClass('open');
  });

$('#exposure-link').click(function() {
   $(this).toggleClass('active');
    $('.exposure-expand').toggleClass('open');
    $('#exposure-link').toggleClass('open');
  });
$('#pike-link').click(function() {
   $(this).toggleClass('active');
    $('.pike-expand').toggleClass('open');
    $('#pike-link').toggleClass('open');
  });
$('#fearful-link').click(function() {
   $(this).toggleClass('active');
    $('.fearful-expand').toggleClass('open');
    $('#fearful-link').toggleClass('open');
  });
$('#matisse-link').click(function() {
   $(this).toggleClass('active');
    $('.matisse-expand').toggleClass('open');
    $('#matisse-link').toggleClass('open');
  });
$('#visual-link').click(function() {
   $(this).toggleClass('active');
    $('.visual-expand').toggleClass('open');
    $('#visual-link').toggleClass('open');
  });
$('#nuclear-link').click(function() {
   $(this).toggleClass('active');
    $('.nuclear-expand').toggleClass('open');
    $('#nuclear-link').toggleClass('open');
  });

//$(".tooltip-showreel").tooltip({
//            show: { effect: "false"},
//            hide: { effect: "false"},  
// classes: {
//    "ui-tooltip": "highlight"
//  }
//    ,
//
//       
//
//        position: { my: "left+25 top", at: "right center" },
//        content: "<h2>Play</h2>", 
//    
//    
//            position: { my: "center", at: "center" },
//            content: '<img src="/assets/play.svg" />',        
//        });

//
//$(".tooltip").tooltip({
//    content: "<h2>Open</h2>",
//            show: { effect: "false"},
//            hide: { effect: "false"},
//            position: { my: "left+15 top", at: "right center" },
//});


//$(".popup-background").tooltip({
//    content: "<h2>Close</h2>",
//            show: { effect: "false"},
//            hide: { effect: "false"},
//            position: { my: "left+15 top", at: "right center" },
//});

$(document).on('mousemove', function(e){
    $('#your_div_id').css({
       left:  e.pageX,
       top:   e.pageY
    });
});

$('#video-container').hover(function() {
   $(this).toggleClass('active');
    $('#your_div_id').toggleClass('open');
  });



$(document).on('mousemove', function(e){
    $('#close').css({
       left:  e.pageX,
       top:   e.pageY
    });
});

$('.popup-background').hover(function() {
   $(this).toggleClass('active');
    $('.close').toggleClass('open');
  });


$(document).on('mousemove', function(e){
    $('#tab-open').css({
       left:  e.pageX,
       top:   e.pageY
    });
});

$('.open-link').hover(function() {
   $(this).toggleClass('active');
    $('.tab-open').toggleClass('open');
  });





  $(function () { // wait for document ready
		// init controller
		var controller = new ScrollMagic.Controller();

		// show pin state
		function updateBox (e) {
			if (e.type == "enter") {
                $(".button_container").toggleClass('open');
                video.pause();
                
			} else {$(".button_container").toggleClass('open');
			}
		}

		// build scenes
		new ScrollMagic.Scene({triggerElement: "#menu-trigger", duration: scroll})
			.setPin("#pin")
			.setClassToggle("#pin", "green")
			.on("enter leave", updateBox)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);

	});


//-----Video  | START -----//




$(document).keyup(function(e) {
  if (e.keyCode === 32) 
      video.pause();
});


window.onload = function () {

    var video = document.getElementById("video");
    var playButton = document.getElementById("play-pause");

    video.addEventListener("click", function () {
        if (video.paused == true) {
            video.play();
            $('#play-pause').removeClass("icon-pause");
            $('#your_div_id').removeClass("icon-pause");

    var offset = -20; 
    $('html, body').animate({
        scrollTop: $("video").offset().top + offset
    }, 300);

   
            
        } else {
            video.pause();
            $('#play-pause').addClass("icon-pause");
            $('#your_div_id').addClass("icon-pause");



        }
    });

    // Event listener for the play/pause button
    playButton.addEventListener("click", function () {
        if (video.paused == true) {
            video.play();
            $('#play-pause').removeClass("icon-pause");
        } else {
            video.pause();
            $('#play-pause').addClass("icon-pause");
        }
    });

    // Update the seek bar as the video plays
    video.addEventListener("timeupdate", function () {
        var value = (100 / video.duration) * video.currentTime;
    });


    // Progress bars

    var progress = document.getElementById('progress');
    var progressBar = document.getElementById('progress-bar');

    // If the browser doesn't support the progress element, set its state for some different styling
    var supportsProgress = (document.createElement('progress').max !== undefined);
    if (!supportsProgress) progress.setAttribute('data-state', 'fake');

    // As the video is playing, update the progress bar
    video.addEventListener('timeupdate', function () {
        // For mobile browsers, ensure that the progress element's max attribute is set
        if (!progress.getAttribute('max')) progress.setAttribute('max', video.duration);
        progress.value = video.currentTime;
        progressBar.style.width = Math.floor((video.currentTime / video.duration) * 100) + '%';
    });

    // React to the user clicking within the progress bar
    progress.addEventListener('click', function (e) {

        //var pos = (e.pageX  - this.offsetLeft) / this.offsetWidth; // Also need to take the parent into account here as .controls now has position:relative
        var pos = (e.pageX - (this.offsetLeft + document.getElementById('video-container').offsetLeft)) / this.offsetWidth;
        video.currentTime = pos * video.duration;
    });


}













 //-----Remove Hover for moblie | START -----//


$(function () {
var touch = 'ontouchstart' in document.documentElement
            || navigator.maxTouchPoints > 0
            || navigator.msMaxTouchPoints > 0;

if (touch) { // remove all :hover stylesheets
    try { // prevent exception on browsers not supporting DOM styleSheets properly
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}
    });

 //-----Remove Hover for moblie | END -----//

 //-----Cursor loader -----//

//$("body").addClass("load");
//
//window.onload = function () {
//$("body").removeClass("load");
//}