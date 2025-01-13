// skil bar

var skillPers = document.querySelectorAll(".skill-per");

skillPers.forEach(function(skillPer) {
  var per = parseFloat(skillPer.getAttribute("per"));
  skillPer.style.width = per + "%";
  
  var animatedValue = 0; 
  var startTime = null;
  
  function animate(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = timestamp - startTime;
    var stepPercentage = progress / 1000; 
    
    if (stepPercentage < 1) {
      animatedValue = per * stepPercentage;
      skillPer.setAttribute("per", Math.floor(animatedValue) + "%");
      requestAnimationFrame(animate);
    } else {
      animatedValue = per;
      skillPer.setAttribute("per", Math.floor(animatedValue) + "%");
    }
  }
  
  requestAnimationFrame(animate);
});



$.fn.jQuerySimpleCounter = function( options ) {
	var settings = $.extend({
		start:  0,
		end:    1,
		easing: 'swing',
		duration: 400,
		complete: ''
	}, options );

	var thisElement = $(this);

	$({count: settings.start}).animate({count: settings.end}, {
		duration: settings.duration,
		easing: settings.easing,
		step: function() {
			var mathCount = Math.ceil(this.count);
			thisElement.text(mathCount);
		},
		complete: settings.complete
	});
};


$('#number1').jQuerySimpleCounter({end: 30,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 30,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 3,duration: 2000});
$('#number4').jQuerySimpleCounter({end: 2,duration: 2500});


var typed = new Typed('#element', {
	strings: ['Web Developer.', 'Graphic Designer.', 'Web Designer.', 'App Developer.'],
	typeSpeed: 30,
  });


