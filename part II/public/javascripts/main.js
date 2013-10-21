$(function() {
$place = $('.place')
$desc = $('.desc')
$button = $('.seville')

var clearTravel = function clearTravel(){
	$place.text('')
	$desc.text('')
}

var newTravel = function newTravel(route){
	clearTravel()
	$button.removeClass()

	$.get('/'+route, function(data){
		$place.append(data.place)
		$desc.append(data.desc)

		$button.addClass(route)
	})
}


$(document).on('click', '.seville', function(){
	newTravel('canary')

})

$(document).on('click', '.canary', function(){
	newTravel('verde')
})

$(document).on('click', '.verde', function(){
	newTravel('strait')
})

$(document).on('click', '.strait', function(){
	newTravel('guam')
})

$(document).on('click', '.guam', function(){
	newTravel('philippines')
	$button.remove()
})









})