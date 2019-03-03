// $(document).on('click', '[data-toggle="lightbox"]', function(event) {
//                 event.preventDefault();
//                 $(this).ekkoLightbox();
//             });
new WOW().init();
// function posY(elm) {
//     var test = elm, top = 0;

//     while(!!test && test.tagName.toLowerCase() !== "body") {
//         top += test.offsetTop;
//         test = test.offsetParent;
//     }

//     return top;
// }

// function viewPortHeight() {
//     var de = document.documentElement;

//     if(!!window.innerWidth)
//     { return window.innerHeight; }
//     else if( de && !isNaN(de.clientHeight) )
//     { return de.clientHeight; }

//     return 0;
// }

// function scrollY() {
//     if( window.pageYOffset ) { return window.pageYOffset; }
//     return Math.max(document.documentElement.scrollTop, document.body.scrollTop);
// }

// function checkVisible( elm ) {
//     var vpH = viewPortHeight(); // Viewport Height
//     var st = scrollY(); // Scroll Top
//     var y = posY(elm);
//     return (y < (vpH + st));
// }
// var elements = [
// 	$('#services > div.vrstemasaze > div > h2'),
// 	$('#team > div.parent-div.d-flex > div'),
// 	$('#news > div'),
	
// ];

// var onScrollHandler = function(){
// 	while(elements.length > 0){
// 		if(checkVisible(elements[0][0])){
// 			console.log("true");
// 			elements[0].addClass('animated');
// 			elements[0].removeClass('disabled');
// 			elements.shift();
// 		} else {
// 			break;
// 		}
// 	}
// }

// $(document).ready(function(){
// 	window.onscroll = function(){
// 		onScrollHandler();
// 	}
// });
