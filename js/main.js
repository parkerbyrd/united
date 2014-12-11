

/// To show/hide forms on home page

$('.button-1').click(function(){
$('.button-1').toggleClass('btn-selected')
$('.button-2').removeClass('btn-selected')
$('.button-3').removeClass('btn-selected')
$('.button-4').removeClass('btn-selected')	
$('.form-1').toggle();
$('.form-2').hide();
$('.form-3').hide();
$('.form-4').hide();
console.log("button 1 clicked")
})

$('.button-2').click(function(){
$('.button-1').removeClass('btn-selected')
$('.button-2').toggleClass('btn-selected')
$('.button-3').removeClass('btn-selected')
$('.button-4').removeClass('btn-selected')		
$('.form-1').hide();
$('.form-2').toggle();
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
$('.form-3').toggle();
$('.form-4').hide();
console.log("button 3 clicked")
})

$('.button-4').click(function(){
$('.button-1').removeClass('btn-selected')
$('.button-2').removeClass('btn-selected')
$('.button-3').removeClass('btn-selected')
$('.button-4').toggleClass('btn-selected')	
$('.form-1').hide();
$('.form-2').hide();
$('.form-3').hide();
$('.form-4').toggle();
console.log("button 4 clicked")
})