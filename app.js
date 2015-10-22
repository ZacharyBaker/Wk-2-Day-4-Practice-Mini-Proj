$(document).ready(function () {
	$('.box').on('click', function () {
		$(this).addClass('white');
 	  });
	$('.box').on('dblclick', function () {
		$(this).removeClass('white');
	})

	$('#reset').on('click', function () {
		$('.box').removeClass('white');
	})


	var color = 'white';
	var colors = 'white green red blue yellow';



	$('#red').on('click', function () {
		color = 'red';
	})

	$('#blue').on('click', function () {
		color = 'blue';
	})

	$('#green').on('click', function () {
		color = 'green';
	})

	$('#yellow').on('click', function () {
		color = 'yellow';
	})

	$('#white').on('click', function () {
		color = 'white';
	})
	$('.box').on('click', function () {
 				   $(this).addClass(color);
	})

	$('.box').on('dblclick', function () {
		$(this).removeClass(color);
	})

	$('#reset').on('click', function () {
		$('.box').removeClass(colors)
	})

	var isPressed = false;
	$('div').mousedown(function(){
		isPressed = true;
	})
	
	$('div').mouseup(function(){
		isPressed = false;
	});

	$('div').mouseenter(function(){
		if (isPressed){
			$(this).addClass(color);
		}
	});
});