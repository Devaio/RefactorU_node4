$(function() {
$place = $('.place')
$desc = $('.desc')
$button = $('.seville')

var Travel = (function(){

	var clearTravel = function clearTravel(){
		$place.text('')
		$desc.text('')
	} 
	var newTravel = function newTravel(route){
	clearTravel()
	$button.removeClass()
	$place.hide()
	$desc.hide()
		$.get('/'+route, function(data){
			$place.append(data.place).fadeIn('slow')
			$desc.append(data.desc).fadeIn('slow')

			$button.addClass(route)
		})
	}

	return {
		newTravel : newTravel,
		clearTravel : clearTravel
	}
})();

$(document).on('click', '.seville', function(){
	Travel.newTravel('canary')
})

$(document).on('click', '.canary', function(){
	Travel.newTravel('verde')
})

$(document).on('click', '.verde', function(){
	Travel.newTravel('strait')
})

$(document).on('click', '.strait', function(){
	Travel.newTravel('guam')
})

$(document).on('click', '.guam', function(){
	Travel.newTravel('philippines')
	$button.remove()
})









})