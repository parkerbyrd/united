

/// To show/hide forms on home page

$('.button-1').click(function(){


$('.form-1').slideToggle(300);
$('.form-2').hide();
$('.form-3').hide();
$('.form-4').hide();
$('.button-1').toggleClass('btn-selected');
$('.button-2').removeClass('btn-selected');
$('.button-3').removeClass('btn-selected');
$('.button-4').removeClass('btn-selected');	
console.log("button 1 clicked")
})

$('.button-2').click(function(){
$('.button-1').removeClass('btn-selected')
$('.button-2').toggleClass('btn-selected')
$('.button-3').removeClass('btn-selected')
$('.button-4').removeClass('btn-selected')		
$('.form-1').hide();
$('.form-2').slideToggle(300);
$('.form-3').hide();
$('.form-4').hide();
console.log("button 2 clicked")
})

$('.button-3').click(function(){
$('.button-1').removeClass('btn-selected')
$('.button-2').removeClass('btn-selected')
$('.button-3').toggleClass('btn-selected')
$('.button-4').removeClass('btn-selected')	
$('.form-1').hide();
$('.form-2').hide();
$('.form-3').slideToggle(300);
$('.form-4').hide();
console.log("button 3 clicked")
})

$('.button-4').click(function(){
$('.button-1').removeClass('btn-selected')
$('.button-2').removeClass('btn-selected')
$('.button-3').removeClass('btn-selected')
$('.button-4').delay(300).toggleClass('btn-selected')	
$('.form-1').hide();
$('.form-2').hide();
$('.form-3').hide();
$('.form-4').slideToggle(300);
console.log("button 4 clicked")
})



//// to show/hide contact info

$('.faq-1').click(function(){
	$('.faq-1').toggleClass('faq-selected')
	$('.faq-2').removeClass('faq-selected')
	$('.faq-3').removeClass('faq-selected')
	$('.faq-4').removeClass('faq-selected')
	$('.faq-5').removeClass('faq-selected')
	$('.faq-6').removeClass('faq-selected')
	$('.faq-p-1').slideToggle(400);
	$('.faq-p-2').hide();
	$('.faq-p-3').hide();
	$('.faq-p-4').hide();
	$('.faq-p-5').hide();
	$('.faq-p-6').hide();
})

$('.faq-2').click(function(){
	$('.faq-1').removeClass('faq-selected')
	$('.faq-2').toggleClass('faq-selected')
	$('.faq-3').removeClass('faq-selected')
	$('.faq-4').removeClass('faq-selected')
	$('.faq-5').removeClass('faq-selected')
	$('.faq-6').removeClass('faq-selected')
	$('.faq-p-1').hide();
	$('.faq-p-2').slideToggle(400);
	$('.faq-p-3').hide();
	$('.faq-p-4').hide();
	$('.faq-p-5').hide();
	$('.faq-p-6').hide();
})
$('.faq-3').click(function(){
	$('.faq-1').removeClass('faq-selected')
	$('.faq-2').removeClass('faq-selected')
	$('.faq-3').toggleClass('faq-selected')
	$('.faq-4').removeClass('faq-selected')
	$('.faq-5').removeClass('faq-selected')
	$('.faq-6').removeClass('faq-selected')
	$('.faq-p-1').hide();
	$('.faq-p-2').hide();
	$('.faq-p-3').slideToggle(400);
	$('.faq-p-4').hide();
	$('.faq-p-5').hide();
	$('.faq-p-6').hide();
})
$('.faq-4').click(function(){
	$('.faq-1').removeClass('faq-selected')
	$('.faq-2').removeClass('faq-selected')
	$('.faq-3').removeClass('faq-selected')
	$('.faq-4').toggleClass('faq-selected')
	$('.faq-5').removeClass('faq-selected')
	$('.faq-6').removeClass('faq-selected')
	$('.faq-p-1').hide();
	$('.faq-p-2').hide();
	$('.faq-p-3').hide();
	$('.faq-p-4').slideToggle(400);
	$('.faq-p-5').hide();
	$('.faq-p-6').hide();
})
$('.faq-5').click(function(){
	$('.faq-1').removeClass('faq-selected')
	$('.faq-2').removeClass('faq-selected')
	$('.faq-3').removeClass('faq-selected')
	$('.faq-4').removeClass('faq-selected')
	$('.faq-5').toggleClass('faq-selected')
	$('.faq-6').removeClass('faq-selected')
	$('.faq-p-1').hide();
	$('.faq-p-2').hide();
	$('.faq-p-3').hide();
	$('.faq-p-4').hide();
	$('.faq-p-5').slideToggle(400);
	$('.faq-p-6').hide();
})
$('.faq-6').click(function(){
	$('.faq-1').removeClass('faq-selected')
	$('.faq-2').removeClass('faq-selected')
	$('.faq-3').removeClass('faq-selected')
	$('.faq-4').removeClass('faq-selected')
	$('.faq-5').removeClass('faq-selected')
	$('.faq-6').toggleClass('faq-selected')
	$('.faq-p-1').hide();
	$('.faq-p-2').hide();
	$('.faq-p-3').hide();
	$('.faq-p-4').hide();
	$('.faq-p-5').hide();
	$('.faq-p-6').slideToggle();
})

$('.member-button').click(function(){
	$('.checkin-member').fadeOut(500);
	$('.checkin-nonmember').delay(500).fadeIn();
})

$('.nonmember-button').click(function(){
	$('.checkin-nonmember').fadeOut(500);
	$('.checkin-member').delay(500).fadeIn();
})

