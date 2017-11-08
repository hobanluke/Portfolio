//smooth scrolling - anchor click

$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});


//-----Actives menu  | START -----//

//Click menu  

$('#toggle-menu').click(function() {
   $(this).toggleClass('active');
    $('#overlay-main').toggleClass('open');
    $('.fixed-white-header').toggleClass('open');
    $('.menu-text div').toggleClass('open');
    $('.menu-text div .under-line').toggleClass('open');
    $('.menu-header').toggleClass('open');
    $('.main').toggleClass('open');
    $('.smooth div').toggleClass('open');
    $('.hover-bar-top').toggleClass('open');
  });

$(function() {
    $('#overlay').click(function() {
        $('main')
            .css('overflow', 'hidden');
    });
	$('body, .close').click(function() {
        $('body')
            .css('overflow', 'visible');
    });
});

//hover menu
    
    $('.hover-bar-top').on('click hover', function () {
        $('.hover-bar').toggleClass('open');
        $('.fixed-white-header').toggleClass('open');
        $('.main').toggleClass('open');
        $('.scrollgress').toggleClass('open');
        $('.hover-bar-top').toggleClass('open');
      });

    $('.hover-bar').on('click hover', function () {
        $('.hover-bar').toggleClass('');
        $('.fixed-white-header').toggleClass('');
        $('.main').toggleClass('');
        $('.scrollgress').toggleClass('');
        $('.hover-bar-top').toggleClass('');
      });

    $(function() {
            $('.main').scrollgress();
    });




  $(function () { // wait for document ready
		// init controller
		var controller = new ScrollMagic.Controller();

		// show pin state
		function updateBox (e) {
            if (e.type == "enter") {
				$(".hover-link1").css('opacity','1');
                $('.image').toggleClass('open');
                $('.hover-link1').mouseenter(function(){
                    $('.hover-link1').css('opacity','.25');
                });
                $('.hover-link1').mouseleave(function(){
                    $('.hover-link1').css('opacity','1');
                });        
			} else {
				$(".hover-link1").css('opacity','.25');
                $('.image').toggleClass('open');
                $('.hover-link1').mouseenter(function(){
                    $('.hover-link1').css('opacity','1');
                });
                $('.hover-link1').mouseleave(function(){
                    $('.hover-link1').css('opacity','.25');
                }); 
			}
		}
		new ScrollMagic.Scene({triggerElement: "#one", duration: scroll})
			.setPin("#pin")
			.setClassToggle("#pin", "green")
			.on("enter leave", updateBox)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	});

  $(function () { // wait for document ready
		// init controller
		var controller = new ScrollMagic.Controller();

		// show pin state
		function updateBox (e) {
			if (e.type == "enter") {
				$(".hover-link2").css('opacity','1');
                $('.image-2').toggleClass('open');
                $('.hover-link2').mouseenter(function(){
                    $('.hover-link2').css('opacity','.25');
                });
                $('.hover-link2').mouseleave(function(){
                    $('.hover-link2').css('opacity','1');
                });
                
			} else {
				$(".hover-link2").css('opacity','.25');
                $('.image-2').toggleClass('open');
                $('.hover-link2').mouseenter(function(){
                    $('.hover-link2').css('opacity','1');
                });
                $('.hover-link2').mouseleave(function(){
                    $('.hover-link2').css('opacity','.25');
                }); 
			}
		}
		new ScrollMagic.Scene({triggerElement: "#two", duration: scroll})
			.setPin("#pin")
			.setClassToggle("#pin", "green")
			.on("enter leave", updateBox)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	});

  $(function () { // wait for document ready
		// init controller
		var controller = new ScrollMagic.Controller();

		// show pin state
		function updateBox (e) {
            if (e.type == "enter") {
				$(".hover-link3").css('opacity','1');
                $('.image-3').toggleClass('open');
                $('.hover-link3').mouseenter(function(){
                    $('.hover-link3').css('opacity','.25');
                });
                $('.hover-link3').mouseleave(function(){
                    $('.hover-link3').css('opacity','1');
                });        
			} else {
				$(".hover-link3").css('opacity','.25');
                $('.image-3').toggleClass('open');
                $('.hover-link3').mouseenter(function(){
                    $('.hover-link3').css('opacity','1');
                });
                $('.hover-link3').mouseleave(function(){
                    $('.hover-link3').css('opacity','.25');
                }); 
			}
		}
		new ScrollMagic.Scene({triggerElement: "#three", duration: scroll})
			.setPin("#pin")
			.setClassToggle("#pin", "green")
			.on("enter leave", updateBox)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	});

  $(function () { // wait for document ready
		// init controller
		var controller = new ScrollMagic.Controller();

		// show pin state
		function updateBox (e) {
            if (e.type == "enter") {
				$(".hover-link4").css('opacity','1');
                $('.image-4').toggleClass('open');
                $('.hover-link4').mouseenter(function(){
                    $('.hover-link4').css('opacity','.25');
                });
                $('.hover-link4').mouseleave(function(){
                    $('.hover-link4').css('opacity','1');
                });        
			} else {
				$(".hover-link4").css('opacity','.25');
                $('.image-4').toggleClass('open');
                $('.hover-link4').mouseenter(function(){
                    $('.hover-link4').css('opacity','1');
                });
                $('.hover-link4').mouseleave(function(){
                    $('.hover-link4').css('opacity','.25');
                }); 
			}
		}
		new ScrollMagic.Scene({triggerElement: "#four", duration: scroll})
			.setPin("#pin")
			.setClassToggle("#pin", "green")
			.on("enter leave", updateBox)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	});

  $(function () { // wait for document ready
		// init controller
		var controller = new ScrollMagic.Controller();

		// show pin state
		function updateBox (e) {
            if (e.type == "enter") {
				$(".hover-link5").css('opacity','1');
                $('.image-5').toggleClass('open');
                $('.hover-link5').mouseenter(function(){
                    $('.hover-link5').css('opacity','.25');
                });
                $('.hover-link5').mouseleave(function(){
                    $('.hover-link5').css('opacity','1');
                });        
			} else {
				$(".hover-link5").css('opacity','.25');
                $('.image-5').toggleClass('open');
                $('.hover-link5').mouseenter(function(){
                    $('.hover-link5').css('opacity','1');
                });
                $('.hover-link5').mouseleave(function(){
                    $('.hover-link5').css('opacity','.25');
                }); 
			}
		}
		new ScrollMagic.Scene({triggerElement: "#five", duration: scroll})
			.setPin("#pin")
			.setClassToggle("#pin", "green")
			.on("enter leave", updateBox)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	});

    $(function () { // wait for document ready
		// init controller
		var controller = new ScrollMagic.Controller();

		// show pin state
		function updateBox (e) {
            if (e.type == "enter") {
				$(".hover-link6").css('opacity','1');
                $('.image-6').toggleClass('open');
                $('.hover-link6').mouseenter(function(){
                    $('.hover-link6').css('opacity','.25');
                });
                $('.hover-link6').mouseleave(function(){
                    $('.hover-link6').css('opacity','1');
                });        
			} else {
				$(".hover-link6").css('opacity','.25');
                $('.image-6').toggleClass('open');
                $('.hover-link6').mouseenter(function(){
                    $('.hover-link6').css('opacity','1');
                });
                $('.hover-link6').mouseleave(function(){
                    $('.hover-link6').css('opacity','.25');
                }); 
			}
		}
		new ScrollMagic.Scene({triggerElement: "#six", duration: scroll})
			.setPin("#pin")
			.setClassToggle("#pin", "green")
			.on("enter leave", updateBox)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	});









  $(function () { // wait for document ready
		// init controller
		var controller = new ScrollMagic.Controller();

		// show pin state
		function updateBox (e) {
			if (e.type == "enter") {
				$(".hover-link21").css('opacity','1');
                $('.hover-link21').mouseenter(function(){
                    $('.hover-link21').css('opacity','.25');
                });
                $('.hover-link21').mouseleave(function(){
                    $('.hover-link21').css('opacity','1');
                });        
			} else {
				$(".hover-link21").css('opacity','.25');
                $('.hover-link21').mouseenter(function(){
                    $('.hover-link21').css('opacity','1');
                });
                $('.hover-link21').mouseleave(function(){
                    $('.hover-link21').css('opacity','.25');
                }); 
			}
		}
		new ScrollMagic.Scene({triggerElement: "#two", duration: scroll})
			.setPin("#pin")
			.setClassToggle("#pin", "green")
			.on("enter leave", updateBox)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	});

  $(function () { // wait for document ready
		// init controller
		var controller = new ScrollMagic.Controller();

		// show pin state
		function updateBox (e) {
            if (e.type == "enter") {
				$(".hover-link31").css('opacity','1');
                $('.hover-link31').mouseenter(function(){
                    $('.hover-link31').css('opacity','.25');
                });
                $('.hover-link31').mouseleave(function(){
                    $('.hover-link31').css('opacity','1');
                });        
			} else {
				$(".hover-link31").css('opacity','.25');
                $('.hover-link31').mouseenter(function(){
                    $('.hover-link31').css('opacity','1');
                });
                $('.hover-link31').mouseleave(function(){
                    $('.hover-link31').css('opacity','.25');
                }); 
			}
		}
		new ScrollMagic.Scene({triggerElement: "#three", duration: scroll})
			.setPin("#pin")
			.setClassToggle("#pin", "green")
			.on("enter leave", updateBox)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	});

  $(function () { // wait for document ready
		// init controller
		var controller = new ScrollMagic.Controller();

		// show pin state
		function updateBox (e) {
            if (e.type == "enter") {
				$(".hover-link41").css('opacity','1');
                $('.hover-link41').mouseenter(function(){
                    $('.hover-link41').css('opacity','.25');
                });
                $('.hover-link41').mouseleave(function(){
                    $('.hover-link41').css('opacity','1');
                });        
			} else {
				$(".hover-link41").css('opacity','.25');
                $('.hover-link41').mouseenter(function(){
                    $('.hover-link41').css('opacity','1');
                });
                $('.hover-link41').mouseleave(function(){
                    $('.hover-link41').css('opacity','.25');
                }); 
			}
		}
		new ScrollMagic.Scene({triggerElement: "#four", duration: scroll})
			.setPin("#pin")
			.setClassToggle("#pin", "green")
			.on("enter leave", updateBox)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	});

  $(function () { // wait for document ready
		// init controller
		var controller = new ScrollMagic.Controller();

		// show pin state
		function updateBox (e) {
            if (e.type == "enter") {
				$(".hover-link51").css('opacity','1');
                $('.hover-link51').mouseenter(function(){
                    $('.hover-link51').css('opacity','.25');
                });
                $('.hover-link51').mouseleave(function(){
                    $('.hover-link51').css('opacity','1');
                });        
			} else {
				$(".hover-link51").css('opacity','.25');
                $('.hover-link51').mouseenter(function(){
                    $('.hover-link51').css('opacity','1');
                });
                $('.hover-link51').mouseleave(function(){
                    $('.hover-link51').css('opacity','.25');
                }); 
			}
		}
		new ScrollMagic.Scene({triggerElement: "#five", duration: scroll})
			.setPin("#pin")
			.setClassToggle("#pin", "green")
			.on("enter leave", updateBox)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	});

    $(function () { // wait for document ready
		// init controller
		var controller = new ScrollMagic.Controller();

		// show pin state
		function updateBox (e) {
            if (e.type == "enter") {
				$(".hover-link61").css('opacity','1');
                $('.hover-link61').mouseenter(function(){
                    $('.hover-link61').css('opacity','.25');
                });
                $('.hover-link61').mouseleave(function(){
                    $('.hover-link61').css('opacity','1');
                });        
			} else {
				$(".hover-link61").css('opacity','.25');
                $('.hover-link61').mouseenter(function(){
                    $('.hover-link61').css('opacity','1');
                });
                $('.hover-link61').mouseleave(function(){
                    $('.hover-link61').css('opacity','.25');
                }); 
			}
		}
		new ScrollMagic.Scene({triggerElement: "#six", duration: scroll})
			.setPin("#pin")
			.setClassToggle("#pin", "green")
			.on("enter leave", updateBox)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	});

$(function () { // wait for document ready
		// init controller
		var controller = new ScrollMagic.Controller();

		// show pin state
		function updateBox (e) {
			if (e.type == "enter") {
                $('.image-book2').toggleClass('open');
			} else {
                $('.image-book2').toggleClass('open'); 
			}
		}
		new ScrollMagic.Scene({triggerElement: "#book-image", duration: scroll})
			.setPin("#pin")
			.setClassToggle("#pin", "green")
			.on("enter leave", updateBox)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	});


//-----Actives menu  | END -----//

//-----Information Page | START -----//

//hover over images
    
    
    $('.landing-image').hover(function(){
        $('.image-credit-header').css('color', '#000');
        $('.image-credit').css('color', '#000');
    },function(){
        $('.image-credit-header').css('z-index','1').css('color', '#999');
        $('.image-credit').css('z-index','1').css('color', '#999');
    })
    $('.image').hover(function(){
        $('.image-credit-header').css('color', '#000');
        $('.image-credit').css('color', '#000');
    },function(){
        $('.image-credit-header').css('z-index','1').css('color', '#999');
        $('.image-credit').css('z-index','1').css('color', '#999');
    })
    $('.image-small').hover(function(){
        $('.image-credit-header').css('color', '#000');
        $('.image-credit').css('color', '#000');
    },function(){
        $('.image-credit-header').css('color', '#999');
        $('.image-credit').css('color', '#999');
    })
    $('.image-small2').hover(function(){
        $('.image-credit-header').css('color', '#000');
        $('.image-credit').css('color', '#000');
    },function(){
        $('.image-credit-header').css('color', '#999');
        $('.image-credit').css('color', '#999');
    })
    $('.image').hover(function(){
        $('.image-timeline-credit-header').css('color', '#000');
        $('.image-timeline-credit').css('color', '#000');
    },function(){
        $('.image-timeline-credit-header').css('color', '#999');
        $('.image-timeline-credit').css('color', '#999');
    })
        $('.image-small3').hover(function(){
        $('.image-timeline-credit-header').css('color', '#000');
        $('.image-timeline-credit').css('color', '#000');
    },function(){
        $('.image-timeline-credit-header').css('color', '#999');
        $('.image-timeline-credit').css('color', '#999');
    })
    
//scrolling effect 
    
  $(function () { // wait for document ready
		// init controller
		var controller = new ScrollMagic.Controller();

		// show pin state
		function updateBox (e) {
			if (e.type == "enter") {
				$(".hover-bar-top").css('opacity','1');
                $('.fixed-white-header').css('opacity','0.95');
			} else {
				$(".hover-bar-top").css('opacity','0');
                $('.fixed-white-header').css('opacity','0');
			}
		}

		// build scenes
		new ScrollMagic.Scene({triggerElement: "#trigger-nav", duration: scroll})
			.setPin("#pin")
			.setClassToggle("#pin", "green")
			.on("enter leave", updateBox)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);

	});

$(function () { // wait for document ready
		// init controller
		var controller = new ScrollMagic.Controller();

		// show pin state
		function updateBox (e) {
            if (e.type == "enter") {
				$(".landing-image-book").toggleClass('open');   
                $(".landing-image-book2").toggleClass('open');   
			} else {
				$(".landing-image-book").toggleClass('open');   
                $(".landing-image-book2").toggleClass('open');      
			}
		}
		new ScrollMagic.Scene({triggerElement: "#book", duration: scroll})
			.setPin("#pin")
			.setClassToggle("#pin", "green")
			.on("enter leave", updateBox)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	});

//-----Information Page | END -----//
         
 //-----Acknowledgements Page | START -----//

//hover over the names

    $('#Adams').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Adams-image').toggleClass('open');
     });

    $('#Kitchin').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Kitchin-image').toggleClass('open');
     });

    $('#Mackie').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Mackie-image').toggleClass('open');
     });

    $('#Mudge').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Mudge-image').toggleClass('open');
     });

    $('#Marden').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Marden-image').toggleClass('open');
     });

    $('#Cruse').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Cruse-image').toggleClass('open');
     });

    $('#Dunbar').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Dunbar-image').toggleClass('open');
     });

    $('#Monk').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Monk-image').toggleClass('open');
     });

    $('#Hoggart').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Hoggart-image').toggleClass('open');
     });

    $('#Nieper').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Nieper-image').toggleClass('open');
     });

    $('#Holling').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Holling-image').toggleClass('open');
     });

    $('#Drew').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Drew-image').toggleClass('open');
     });

    $('#Campbell').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Campbell-image').toggleClass('open');
     });

    $('#Herk').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Herk-image').toggleClass('open');
     });

    $('#Jonker').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Jonker-image').toggleClass('open');
     });

    $('#Dixon').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Dixon-image').toggleClass('open');     
     });

    $('#Joynson').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Joynson-image').toggleClass('open');
     });

    $('#Keane').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Keane-image').toggleClass('open');
     });

    $('#Duggan').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Duggan-image').toggleClass('open');
     });

    $('#Neill').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Neill-image').toggleClass('open');
     });

    $('#Osborne').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Osborne-image').toggleClass('open');
     });

    $('#Hale').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Hale-image').toggleClass('open');
     });

    $('#Palmer').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Palmer-image').toggleClass('open');
     });

    $('#Rodger').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Rodger-image').toggleClass('open');
     });

    $('#Rockhouse').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Rockhouse-image').toggleClass('open');
     });

    $('#Sims').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Sims-image').toggleClass('open');
     });

    $('#Ufer').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Ufer-image').toggleClass('open');
     });

    $('#Valli').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Valli-image').toggleClass('open');
     });

    $('#Hurren').hover(function(){
        $('.footer-background').toggleClass('open');
         $('.Hurren-image').toggleClass('open');
     });



    //Alternating names
    
     var quotes = $(".alternating-introtext");
    var quoteIndex = -1;
    
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(300)
            .delay(700)
            .fadeOut(300, showNextQuote);
    }
    
    showNextQuote();
    
    
 //-----Acknowledgements Page | END -----//

 //-----Footer | START -----//


  $(function () { // wait for document ready
		// init controller
		var controller = new ScrollMagic.Controller();

		// show pin state
		function updateBox (e) {
			if (e.type == "enter") {
                $(".bottom-footer-header").toggleClass('open');
                $(".bottom-footer-content").toggleClass('open');
                $(".bottom-footer-credit").toggleClass('open');
			} else {
                $(".bottom-footer-header").toggleClass('open');
                $(".bottom-footer-content").toggleClass('open');
                $(".bottom-footer-credit").toggleClass('open');
			}
		}

		// build scenes
		new ScrollMagic.Scene({triggerElement: "#footer", duration: scroll})
			.setPin("#pin")
			.setClassToggle("#pin", "green")
			.on("enter leave", updateBox)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);

	});

 //-----Footer | END -----//

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