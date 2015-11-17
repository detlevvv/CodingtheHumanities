// D.A.J. Hiep.
// Image turner function that takes urls as a parameter.
function imageturner(urls) {
// Select image and store in a variable called image.
	var image = $(".test-image img");
// Image is hidden if not loaded.
	image.removeClass("hidden");
// Create variable called turnNumber and set it's value to 0.
	var turnNumber = 0;
// Creates array with the image urls which are used if Europeana images are not loaded.
	if(!urls) urls = [ 'http://xiostorage.com/wp-content/uploads/2015/10/test.png', 
		'https://s-media-cache-ak0.pinimg.com/736x/4b/10/f4/4b10f471c25e2a70dc9fb01ac4bd4311.jpg',
		'http://www.bbtoystore.com/mm5/beanies/PL_danglesLARGE.jpg'
		];
// Create variable called imgNumber and set it's value to 0.
	var imgNumber = 0;
// Turn-button function gets called on click.
	$(".turn-button").click(function() {
// Keeps track of how many times the image has turned and resets after 3 times.
		turnNumber = (turnNumber + 1)%4;
// Toggles appropriate Class to turn image.
		switch (turnNumber){
			case 1: image.toggleClass("test-image-turned-1"); break;
			case 2:	image.toggleClass("test-image-turned-1");
					image.toggleClass("test-image-turned-3");
			case 3:	image.toggleClass("test-image-turned-2");
			default: image.toggleClass("test-image-turned-3");
		}
	});
// Guess function gets called on click.
	$(".guess").click(function() {
		alert(turnNumber === 0 ? "Good guess!" : "Wrong! Please try again.");
	});
	
	var next = function() {
// Keeps track of how many times the image has changed and resets after urls.length times.
		imgNumber = (imgNumber +1)%urls.length;
// Toggles image urls.			
		image.attr('src', urls[imgNumber]);
	};
	
// Next function gets called on click.
	$(".next").click(next);
	
// Also execute next on first load.
	next();
}